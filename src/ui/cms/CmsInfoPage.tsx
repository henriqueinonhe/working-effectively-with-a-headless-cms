import { InfoPage as CmsInfoPageProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";
import dynamic from "next/dynamic";

const InfoPage = dynamic(() =>
  import("../components/InfoPage").then((m) => m.InfoPage),
);

export const CmsInfoPage = ({ content }: CmsInfoPageProps) => {
  const contentElement = content.map((item) => (
    <CmsComponent key={item.id} {...item} />
  ));

  return <InfoPage content={contentElement} />;
};
