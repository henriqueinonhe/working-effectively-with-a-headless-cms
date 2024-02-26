import { YoutubeVideo as CmsYoutubeVideoProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";

const YoutubeVideo = dynamic(() =>
  import("../components/YoutubeVideo").then((m) => m.YoutubeVideo),
);

export const CmsYoutubeVideo = ({ videoId }: CmsYoutubeVideoProps) => {
  return <YoutubeVideo videoId={videoId} />;
};
