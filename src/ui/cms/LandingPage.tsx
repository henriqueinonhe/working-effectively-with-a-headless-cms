import { LandingPage as LandingPageProps } from "@/infrastructure/cms/schemas";
import { Hero } from "./Hero";
import { Content } from "./Content";

export const LandingPage = ({ hero, content }: LandingPageProps) => {
  return (
    <div>
      <Hero {...hero} />

      {content.map((item) => (
        <Content key={item.id} {...item} />
      ))}
    </div>
  );
};
