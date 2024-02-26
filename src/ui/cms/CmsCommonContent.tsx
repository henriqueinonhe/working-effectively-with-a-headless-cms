import { CommonContent as CmsCommonContentProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";

const CommonContent = dynamic(() =>
  import("../components/CommonContent").then((m) => m.CommonContent),
);

export const CmsCommonContent = ({ headline, body }: CmsCommonContentProps) => {
  return <CommonContent headline={headline} body={body} />;
};
