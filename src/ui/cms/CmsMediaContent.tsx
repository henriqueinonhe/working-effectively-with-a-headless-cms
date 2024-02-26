import { MediaContent as CmsMediaContentOwnProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";
import { getCmsComponentRenderer } from "./getCmsComponentRenderer";
import { ContentEnterAnimation } from "../components/ContentAnimationWrapper";

const MediaContent = dynamic(() =>
  import("../components/MediaContent").then((m) => m.MediaContent),
);

export type CmsMediaContentForeignProps = {
  enterAnimation: ContentEnterAnimation;
};

export const makeRenderCmsMediaContent =
  ({ headline, media }: CmsMediaContentOwnProps) =>
  ({ enterAnimation }: CmsMediaContentForeignProps) => {
    const renderMedia = getCmsComponentRenderer(media);
    const mediaElement = renderMedia();

    return (
      <MediaContent
        headline={headline}
        media={mediaElement}
        enterAnimation={enterAnimation}
      />
    );
  };
