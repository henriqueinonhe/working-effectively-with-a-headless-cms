import { LandingPage as CmsLandingPageOwnProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";
import {
  getCmsComponentRenderer,
  getCmsComponentRendererList,
} from "./getCmsComponentRenderer";
import { ContentEnterAnimation } from "../components/ContentAnimationWrapper";

const LandingPage = dynamic(() =>
  import("../components/LandingPage").then((m) => m.LandingPage),
);

export const makeRenderCmsLandingPage =
  ({ hero, content, contentEnterAnimation }: CmsLandingPageOwnProps) =>
  () => {
    const renderHero = getCmsComponentRenderer(hero);

    const contentAnimationList = computeContentAnimationList(
      contentEnterAnimation,
      content.length,
    );
    const renderContentList = getCmsComponentRendererList(content);
    const contentElement = renderContentList.map((render, index) =>
      render({ enterAnimation: contentAnimationList[index] }),
    );

    return <LandingPage hero={renderHero()} content={contentElement} />;
  };

const computeContentAnimationList = (
  contentEnterAnimation: CmsLandingPageOwnProps["contentEnterAnimation"],
  contentListSize: number,
) => {
  const strategies: Record<
    CmsLandingPageOwnProps["contentEnterAnimation"],
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
