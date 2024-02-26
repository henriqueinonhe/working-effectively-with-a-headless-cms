import cx from "./CommonContent.module.scss";
import {
  ContentEnterAnimation,
  ContentAnimationWrapper,
} from "./ContentAnimationWrapper";

export type CommonContentProps = {
  headline: string;
  body: string;
  enterAnimation?: ContentEnterAnimation;
};

export const CommonContent = ({
  headline,
  body,
  enterAnimation = "None",
}: CommonContentProps) => {
  return (
    <ContentAnimationWrapper enterAnimation={enterAnimation}>
      <div className={cx.container}>
        <h3 className={cx.headline}>{headline}</h3>

        <p className={cx.body}>{body}</p>
      </div>
    </ContentAnimationWrapper>
  );
};
