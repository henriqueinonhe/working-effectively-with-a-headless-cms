import { aboutContent } from "./content/about";
import { featuresContent } from "./content/features";
import { homeContent } from "./content/home";

export const fetchContent = async <T>(slug: string) => {
  const content = contentSlugMatrix[slug];

  return content as T;
};

const contentSlugMatrix: Record<string, unknown> = {
  "/": homeContent,
  "/about": aboutContent,
  "/features": featuresContent,
};
