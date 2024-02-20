import { YoutubeVideo as CmsYoutubeVideoProps } from "@/infrastructure/cms/schemas";
import { YoutubeVideo } from "../components/YoutubeVideo";

export const CmsYoutubeVideo = ({ videoId }: CmsYoutubeVideoProps) => {
  return <YoutubeVideo videoId={videoId} />;
};
