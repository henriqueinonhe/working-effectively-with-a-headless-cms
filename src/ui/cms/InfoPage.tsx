import { InfoPage as InfoPageProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";

export const InfoPage = ({ content }: InfoPageProps) => {
  return (
    <div>
      {content.map((item) => (
        <CmsComponent key={item.id} {...item} />
      ))}
    </div>
  );
};
