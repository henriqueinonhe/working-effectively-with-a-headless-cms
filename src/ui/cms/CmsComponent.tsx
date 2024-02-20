import {
  LandingPage as LandingPageProps,
  InfoPage as InfoPageProps,
  Hero as HeroProps,
  CommonContent as CommonContentProps,
  MediaContent as MediaContentProps,
  Image as ImageProps,
  YoutubeVideo as YoutubeVideoProps,
} from "@/infrastructure/cms/schemas";
import { CmsLandingPage } from "./CmsLandingPage";
import { CmsInfoPage } from "./CmsInfoPage";
import { CmsHero } from "./CmsHero";
import { CmsCommonContent } from "./CmsCommonContent";
import { CmsMediaContent } from "./CmsMediaContent";
import { CmsImage } from "./CmsImage";
import { CmsYoutubeVideo } from "./CmsYoutubeVideo";

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
  LandingPage: CmsLandingPage,
  InfoPage: CmsInfoPage,
  Hero: CmsHero,
  CommonContent: CmsCommonContent,
  MediaContent: CmsMediaContent,
  Image: CmsImage,
  YoutubeVideo: CmsYoutubeVideo,
} satisfies Record<CmsComponentProps["component"], unknown>;
