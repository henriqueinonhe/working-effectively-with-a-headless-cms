import { LandingPage as CmsLandingPageOwnProps } from "@/infrastructure/cms/schemas";
import {
  getCmsComponentRenderer,
  getCmsComponentRendererList,
} from "./getCmsComponentRenderer";
import dynamic from "next/dynamic";

const LandingPage = dynamic(() =>
  import("../components/LandingPage").then((m) => m.LandingPage),
);

export const makeRenderCmsLandingPage =
  ({ hero, content, contentEnterAnimation }: CmsLandingPageOwnProps) =>
  () => {
    const renderHero = getCmsComponentRenderer(hero);

    const renderContentList = getCmsComponentRendererList(content);

    return (
      <LandingPage
        hero={renderHero()}
        renderContentList={renderContentList}
        contentEnterAnimation={contentEnterAnimation}
      />
    );
  };
