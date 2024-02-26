import { ReactNode } from "react";
import { ContentEnterAnimation } from "./ContentAnimationWrapper";

export type LandingPageProps = {
  hero: ReactNode;
  renderContentList: Array<
    (props: { enterAnimation: ContentEnterAnimation }) => JSX.Element
  >;
  contentEnterAnimation: LandingPageContentEnterAnimation;
};

export type LandingPageContentEnterAnimation =
  | "Alternate"
  | "None"
  | "FromLeft"
  | "FromRight";

export const LandingPage = ({
  hero,
  renderContentList,
  contentEnterAnimation,
}: LandingPageProps) => {
  const contentAnimationList = computeContentAnimationList(
    contentEnterAnimation,
    renderContentList.length,
  );

  return (
    <div>
      {hero}

      {renderContentList.map((renderContent, index) =>
        renderContent({
          enterAnimation: contentAnimationList[index],
        }),
      )}
    </div>
  );
};

const computeContentAnimationList = (
  contentEnterAnimation: LandingPageContentEnterAnimation,
  contentListSize: number,
) => {
  const strategies: Record<
    LandingPageContentEnterAnimation,
    () => Array<ContentEnterAnimation>
  > = {
    Alternate: () =>
      Array.from({ length: contentListSize }, (_, index) =>
        index % 2 === 0 ? "FromLeft" : "FromRight",
      ),
    None: () => Array(contentListSize).fill("None"),
    FromLeft: () => Array(contentListSize).fill("FromLeft"),
    FromRight: () => Array(contentListSize).fill("FromRight"),
  };

  return strategies[contentEnterAnimation]();
};
