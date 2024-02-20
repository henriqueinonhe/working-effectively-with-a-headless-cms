import { MediaContent as MediaContentProps } from "@/infrastructure/cms/schemas";
import { Image } from "./Image";
import cx from "./MediaContent.module.scss";
import { YoutubeVideo } from "./YoutubeVideo";

export const MediaContent = ({ headline, media }: MediaContentProps) => {
  return (
    <div className={cx.container}>
      <h3 className={cx.headline}>{headline}</h3>

      <div className={cx.imageContainer}>
        {media.component === "Image" ? (
          <Image {...media} />
        ) : (
          <YoutubeVideo {...media} />
        )}
      </div>
    </div>
  );
};
