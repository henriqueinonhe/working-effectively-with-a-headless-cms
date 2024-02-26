import { CommonContent as CmsCommonContentProps } from "@/infrastructure/cms/schemas";
import { CommonContent } from "../components/CommonContent";

export const CmsCommonContent = ({ headline, body }: CmsCommonContentProps) => {
  return <CommonContent headline={headline} body={body} />;
};
