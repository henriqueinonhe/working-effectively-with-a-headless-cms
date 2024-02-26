import { Fragment } from "react";
import {
  LandingPage as LandingPageProps,
  InfoPage as InfoPageProps,
  Hero as HeroProps,
  CommonContent as CommonContentProps,
  MediaContent as MediaContentProps,
  Image as ImageProps,
  YoutubeVideo as YoutubeVideoProps,
} from "@/infrastructure/cms/schemas";
import { makeRenderCmsLandingPage } from "./CmsLandingPage";
import { makeRenderCmsInfoPage } from "./CmsInfoPage";
import { makeRenderCmsHero } from "./CmsHero";
import { makeRenderCmsCommonContent } from "./CmsCommonContent";
import { makeRenderCmsMediaContent } from "./CmsMediaContent";
import { makeRenderCmsImage } from "./CmsImage";
import { makeRenderCmsYoutubeVideo } from "./CmsYoutubeVideo";

export const getCmsComponentRenderer = <ComponentName extends CmsComponentName>(
  props: SpecificCmsComponentProps<ComponentName>,
) => {
  const makeRenderCmsComponent = cmsComponentRendererMatrix[props.component];

  if (!makeRenderCmsComponent) {
    return () => <FallbackComponent />;
  }

  const renderCmsComponent = makeRenderCmsComponent(props as any);

  return renderCmsComponent as ReturnType<
    (typeof cmsComponentRendererMatrix)[ComponentName]
  >;
};

// As we're now using render functions,
// we cannot pass keys directly to components,
// so it's convenient to have a function
// that deals with lists of components
// and does that for us
export const getCmsComponentRendererList = <
  ComponentName extends CmsComponentName,
>(
  propsList: Array<SpecificCmsComponentProps<ComponentName>>,
) => {
  const renderCmsComponentList = propsList.map((ownProps) => {
    const renderCmsComponent = getCmsComponentRenderer(ownProps) as ReturnType<
      (typeof cmsComponentRendererMatrix)[ComponentName]
    >;

    return (foreignProps: Parameters<typeof renderCmsComponent>[0]) => (
      <Fragment key={ownProps.id}>
        {renderCmsComponent(foreignProps as any)}
      </Fragment>
    );
  });

  return renderCmsComponentList;
};

const FallbackComponent = () => null;

export type CmsComponentProps =
  | LandingPageProps
  | InfoPageProps
  | HeroProps
  | CommonContentProps
  | MediaContentProps
  | ImageProps
  | YoutubeVideoProps;

export type CmsComponentName = CmsComponentProps["component"];

export type SpecificCmsComponentProps<ComponentName extends CmsComponentName> =
  Extract<CmsComponentProps, { component: ComponentName }>;

export const cmsComponentRendererMatrix = {
  LandingPage: makeRenderCmsLandingPage,
  InfoPage: makeRenderCmsInfoPage,
  Hero: makeRenderCmsHero,
  CommonContent: makeRenderCmsCommonContent,
  MediaContent: makeRenderCmsMediaContent,
  Image: makeRenderCmsImage,
  YoutubeVideo: makeRenderCmsYoutubeVideo,
} satisfies Record<CmsComponentProps["component"], unknown>;
