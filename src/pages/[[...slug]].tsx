import { LandingPage as LandingPageProps } from "@/infrastructure/cms/schemas";
import { fetchContent } from "@/infrastructure/cms/fetchContent";
import { LandingPage } from "@/ui/cms/LandingPage";
import { GetStaticPaths, GetStaticProps } from "next";

type PageProps = {
  content: LandingPageProps;
};

export default function Page({ content }: PageProps) {
  return <LandingPage {...content} />;
}

export const getStaticProps: GetStaticProps<
  PageProps,
  { slug: Array<string> }
> = async (context) => {
  const slug = context.params?.slug?.join("/") ?? "";
  const formattedSlug = `/${slug}`;

  const content = await fetchContent<LandingPageProps>(formattedSlug);

  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
