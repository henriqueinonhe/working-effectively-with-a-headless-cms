import { InfoPage as InfoPageProps } from "@/infrastructure/cms/schemas";
import { CommonContent } from "./CommonContent";
import { MediaContent } from "./MediaContent";

export const InfoPage = ({ content }: InfoPageProps) => {
  return (
    <div>
      {content.map((item) => {
        if (item.component === "CommonContent") {
          return <CommonContent key={item.id} {...item} />;
        }

        return <MediaContent key={item.id} {...item} />;
      })}
    </div>
  );
};
