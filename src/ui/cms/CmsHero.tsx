import { Hero as CmsHeroOwnProps } from "@/infrastructure/cms/schemas";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero").then((m) => m.Hero));

export const makeRenderCmsHero =
  ({ headline, body }: CmsHeroOwnProps) =>
  () => {
    return <Hero headline={headline} body={body} />;
  };
