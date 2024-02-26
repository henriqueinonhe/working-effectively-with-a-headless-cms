import { InfoPage as CmsInfoPageOwnProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";
import { getCmsComponentRendererList } from "./getCmsComponentRenderer";

const InfoPage = dynamic(() =>
  import("../components/InfoPage").then((m) => m.InfoPage),
);

export const makeRenderCmsInfoPage =
  ({ content }: CmsInfoPageOwnProps) =>
  () => {
    const renderContentList = getCmsComponentRendererList(content);

    const contentElement = renderContentList.map((render) =>
      render({
        enterAnimation: "None",
      }),
    );

    return <InfoPage content={contentElement} />;
  };
