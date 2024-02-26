import { LandingPage as CmsLandingPageProps } from "@/infrastructure/cms/schemas";
import { CmsComponent } from "./CmsComponent";
import dynamic from "next/dynamic";

const LandingPage = dynamic(() =>
  import("../components/LandingPage").then((m) => m.LandingPage),
);

export const CmsLandingPage = ({ hero, content }: CmsLandingPageProps) => {
  const heroElement = <CmsComponent {...hero} />;
  const contentElement = content.map((item) => (
    <CmsComponent key={item.id} {...item} />
  ));

  return <LandingPage hero={heroElement} content={contentElement} />;
};
