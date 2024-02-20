import { Hero as CmsHeroProps } from "@/infrastructure/cms/schemas";
import { Hero } from "../components/Hero";

export const CmsHero = ({ headline, body }: CmsHeroProps) => {
  return <Hero headline={headline} body={body} />;
};
