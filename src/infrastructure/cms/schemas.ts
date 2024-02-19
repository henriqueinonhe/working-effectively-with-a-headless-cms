export type LandingPage = {
  id: string;
  component: "LandingPage";
  hero: Hero;
  content: Array<Content>;
};

export type Hero = {
  id: string;
  component: "Hero";
  headline: string;
  body: string;
};

export type Content = {
  id: string;
  component: "Content";
  headline: string;
  body: string;
};
