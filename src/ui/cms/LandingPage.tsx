import { LandingPage as LandingPageProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";

export const LandingPage = ({ hero, content }: LandingPageProps) => {
  return (
    <div>
      <CmsComponent {...hero} />

      {content.map((item) => (
        <CmsComponent key={item.id} {...item} />
      ))}
    </div>
  );
};
