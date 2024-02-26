import { Hero as CmsHeroProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero").then((m) => m.Hero));

export const CmsHero = ({ headline, body }: CmsHeroProps) => {
  return <Hero headline={headline} body={body} />;
};
