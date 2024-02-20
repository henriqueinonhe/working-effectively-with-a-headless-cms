import { ReactNode } from "react";
import cx from "./MediaContent.module.scss";

export type MediaContentProps = {
  headline: string;
  media: ReactNode;
};

export const MediaContent = ({ headline, media }: MediaContentProps) => {
  return (
    <div className={cx.container}>
      <h3 className={cx.headline}>{headline}</h3>

      <div className={cx.imageContainer}>{media}</div>
    </div>
  );
};
