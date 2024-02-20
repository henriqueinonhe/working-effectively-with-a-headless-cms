import {
  LandingPage as LandingPageProps,
  InfoPage as InfoPageProps,
  Hero as HeroProps,
  CommonContent as CommonContentProps,
  MediaContent as MediaContentProps,
  Image as ImageProps,
  YoutubeVideo as YoutubeVideoProps,
} from "@/infrastructure/cms/schemas";
import { LandingPage } from "./LandingPage";
import { InfoPage } from "./InfoPage";
import { Hero } from "./Hero";
import { CommonContent } from "./CommonContent";
import { MediaContent } from "./MediaContent";
import { Image } from "./Image";
import { YoutubeVideo } from "./YoutubeVideo";

export type CmsComponentProps =
  | LandingPageProps
  | InfoPageProps
  | HeroProps
  | CommonContentProps
  | MediaContentProps
  | ImageProps
  | YoutubeVideoProps;

export const CmsComponent = (props: CmsComponentProps) => {
  const Component = componentMatrix[props.component];

  if (!Component) {
    console.error(`Component not found: ${props.component}`);

    return null;
  }

  return <Component {...(props as any)} />;
};

const componentMatrix = {
  LandingPage: LandingPage,
  InfoPage: InfoPage,
  Hero: Hero,
  CommonContent: CommonContent,
  MediaContent: MediaContent,
  Image: Image,
  YoutubeVideo: YoutubeVideo,
} satisfies Record<CmsComponentProps["component"], unknown>;
