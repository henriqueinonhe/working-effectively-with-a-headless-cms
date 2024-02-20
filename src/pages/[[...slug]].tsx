import {
  LandingPage as LandingPageProps,
  InfoPage as InfoPageProps,
} from "@/infrastructure/cms/schemas";
import { fetchContent } from "@/infrastructure/cms/fetchContent";
import { LandingPage } from "@/ui/cms/LandingPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { InfoPage } from "@/ui/cms/InfoPage";

type PageProps = {
  content: LandingPageProps | InfoPageProps;
};

export default function Page({ content }: PageProps) {
  if (content.component === "LandingPage") {
    return <LandingPage {...content} />;
  }

  return <InfoPage {...content} />;
}

export const getStaticProps: GetStaticProps<
  PageProps,
  { slug: Array<string> }
> = async (context) => {
  const slug = context.params?.slug?.join("/") ?? "";
  const formattedSlug = `/${slug}`;

  const content = await fetchContent<LandingPageProps | InfoPageProps>(
    formattedSlug,
  );

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
