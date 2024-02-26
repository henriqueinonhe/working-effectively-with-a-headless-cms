import {
  LandingPage as LandingPageProps,
  InfoPage as InfoPageProps,
} from "@/infrastructure/cms/schemas";
import { fetchContent } from "@/infrastructure/cms/fetchContent";
import { GetStaticPaths, GetStaticProps } from "next";
import { getCmsComponentRenderer } from "@/ui/cms/getCmsComponentRenderer";

type PageProps = {
  content: LandingPageProps | InfoPageProps;
};

export default function Page({ content }: PageProps) {
  const render = getCmsComponentRenderer(content);

  return render();
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
