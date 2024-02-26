import { ReactNode } from "react";
import cx from "./MediaContent.module.scss";
import {
  ContentEnterAnimation,
  ContentAnimationWrapper,
} from "./ContentAnimationWrapper";

export type MediaContentProps = {
  headline: string;
  media: ReactNode;
  enterAnimation?: ContentEnterAnimation;
};

export const MediaContent = ({
  headline,
  media,
  enterAnimation = "None",
}: MediaContentProps) => {
  return (
    <ContentAnimationWrapper enterAnimation={enterAnimation}>
      <div className={cx.container}>
        <h3 className={cx.headline}>{headline}</h3>

        <div className={cx.imageContainer}>{media}</div>
      </div>
    </ContentAnimationWrapper>
  );
};
