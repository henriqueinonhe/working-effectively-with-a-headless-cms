import { MediaContent as CmsMediaContentProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";
import dynamic from "next/dynamic";

const MediaContent = dynamic(() =>
  import("../components/MediaContent").then((m) => m.MediaContent),
);

export const CmsMediaContent = ({ headline, media }: CmsMediaContentProps) => {
  const mediaElement = <CmsComponent {...media} />;

  return <MediaContent headline={headline} media={mediaElement} />;
};
