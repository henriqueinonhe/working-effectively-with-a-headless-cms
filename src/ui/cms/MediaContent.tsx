import { MediaContent as MediaContentProps } from "@/infrastructure/cms/schemas";
import cx from "./MediaContent.module.scss";
import { CmsComponent } from "./CmsComponent";

export const MediaContent = ({ headline, media }: MediaContentProps) => {
  return (
    <div className={cx.container}>
      <h3 className={cx.headline}>{headline}</h3>

      <div className={cx.imageContainer}>
        <CmsComponent {...media} />
      </div>
    </div>
  );
};
