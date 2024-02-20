import { InfoPage } from "../schemas";

export const featuresContent: InfoPage = {
  id: "81106c2f-462f-4695-9de7-780406b69ce2",
  component: "InfoPage",
  content: [
    {
      id: "fb8f0a00-6fb0-4dc8-93b1-cb9cca79bf81",
      component: "MediaContent",
      headline: "Amazing",
      media: {
        id: "0dd2d15a-fa1c-4897-b159-46affd10dfd4",
        component: "Image",
        src: "https://placehold.co/600x400",
        alt: "Product",
        width: 600,
        height: 400,
      },
    },
    {
      id: "9f10d94c-8af4-42d2-99bf-1f008b86f08b",
      component: "CommonContent",
      headline: "Flexible",
      body: "Our products are flexible and can be used in many ways.",
    },
    {
      id: "631fcc54-7147-4ebf-ab72-a17260297e2c",
      component: "CommonContent",
      headline: "Best Bang for Your Buck",
      body: "Our products are affordable and high quality.",
    },
  ],
};
