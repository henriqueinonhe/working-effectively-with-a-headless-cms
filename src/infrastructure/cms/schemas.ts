export type LandingPage = {
  id: string;
  component: "LandingPage";
  hero: Hero;
  content: Array<CommonContent | MediaContent>;
  contentEnterAnimation: "FromLeft" | "FromRight" | "Alternate" | "None";
};

export type InfoPage = {
  id: string;
  component: "InfoPage";
  content: Array<CommonContent | MediaContent>;
};

export type Hero = {
  id: string;
  component: "Hero";
  headline: string;
  body: string;
};

export type CommonContent = {
  id: string;
  component: "CommonContent";
  headline: string;
  body: string;
};

export type MediaContent = {
  id: string;
  component: "MediaContent";
  headline: string;
  media: Image | YoutubeVideo;
};

export type Image = {
  id: string;
  component: "Image";
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type YoutubeVideo = {
  id: string;
  component: "YoutubeVideo";
  videoId: string;
};
