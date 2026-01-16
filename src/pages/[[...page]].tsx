import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import DefaultErrorPage from "next/error";

// Importe le registre des composants
import "../builder-registry";
import { BUILDER_API_KEY } from "../builder-registry";

// Initialise Builder avec ta clé API
builder.init(BUILDER_API_KEY);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type BuilderPage = any;

interface PageProps {
  page: BuilderPage | null;
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const urlPath = "/" + (Array.isArray(params?.page) ? params.page.join("/") : params?.page || "");

  const page = await builder
    .get("page", {
      userAttributes: { urlPath },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await builder.getAll("page", {
    fields: "data.url",
    options: { noTargeting: true },
  });

  return {
    paths: pages
      .map((page) => page.data?.url)
      .filter((url): url is string => typeof url === "string")
      .map((url) => ({ params: { page: url.split("/").filter(Boolean) } })),
    fallback: "blocking",
  };
};

export default function Page({ page }: PageProps) {
  const isPreviewing = useIsPreviewing();

  if (!page && !isPreviewing) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{page?.data?.title || "Mon Blog"}</title>
        <meta name="description" content={page?.data?.description || "Mon blog personnel"} />
      </Head>
      <BuilderComponent model="page" content={page} />
    </>
  );
}
