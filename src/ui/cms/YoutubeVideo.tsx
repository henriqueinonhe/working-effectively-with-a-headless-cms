import { YoutubeVideo as YoutubeVideoProps } from "@/infrastructure/cms/schemas";

export const YoutubeVideo = ({ videoId }: YoutubeVideoProps) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
