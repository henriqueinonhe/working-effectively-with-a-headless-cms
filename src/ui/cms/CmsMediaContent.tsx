import { MediaContent as CmsMediaContentProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";
import { MediaContent } from "../components/MediaContent";

export const CmsMediaContent = ({ headline, media }: CmsMediaContentProps) => {
  const mediaElement = <CmsComponent {...media} />;

  return <MediaContent headline={headline} media={mediaElement} />;
};
