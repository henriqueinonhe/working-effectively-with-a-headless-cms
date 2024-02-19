import { LandingPage as LandingPageProps } from "@/infrastructure/cms/schemas";
import { Hero } from "./Hero";
import { CommonContent } from "./CommonContent";
import { MediaContent } from "./MediaContent";

export const LandingPage = ({ hero, content }: LandingPageProps) => {
  return (
    <div>
      <Hero {...hero} />

      {content.map((item) => {
        if (item.component === "CommonContent") {
          return <CommonContent key={item.id} {...item} />;
        }

        return <MediaContent key={item.id} {...item} />;
      })}
    </div>
  );
};
