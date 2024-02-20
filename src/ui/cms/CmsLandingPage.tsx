import { LandingPage as CmsLandingPageProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";
import { LandingPage } from "../components/LandingPage";

export const CmsLandingPage = ({ hero, content }: CmsLandingPageProps) => {
  const heroElement = <CmsComponent {...hero} />;
  const contentElement = content.map((item) => (
    <CmsComponent key={item.id} {...item} />
  ));

  return <LandingPage hero={heroElement} content={contentElement} />;
};
