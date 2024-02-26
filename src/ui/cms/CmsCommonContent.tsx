import { CommonContent as CmsCommonContentOwnProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";
import { ContentEnterAnimation } from "../components/ContentAnimationWrapper";

const CommonContent = dynamic(() =>
  import("../components/CommonContent").then((m) => m.CommonContent),
);

export type CmsCommonContentForeignProps = {
  enterAnimation: ContentEnterAnimation;
};

export const makeRenderCmsCommonContent =
  ({ headline, body }: CmsCommonContentOwnProps) =>
  ({ enterAnimation }: CmsCommonContentForeignProps) => {
    return (
      <CommonContent
        headline={headline}
        body={body}
        enterAnimation={enterAnimation}
      />
    );
  };
