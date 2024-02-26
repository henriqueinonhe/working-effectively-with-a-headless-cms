import { YoutubeVideo as CmsYoutubeVideoOwnProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";

const YoutubeVideo = dynamic(() =>
  import("../components/YoutubeVideo").then((m) => m.YoutubeVideo),
);

export const makeRenderCmsYoutubeVideo =
  ({ videoId }: CmsYoutubeVideoOwnProps) =>
  () => {
    return <YoutubeVideo videoId={videoId} />;
  };
