import { LandingPage } from "../schemas";

export const homeContent: LandingPage = {
  id: "b65cc64c-a280-4acd-aee5-fb43c7ec37cf",
  component: "LandingPage",
  hero: {
    id: "4f6d2d72-dc1d-493e-841d-7e42844f88a7",
    component: "Hero",
    headline: "The product you were looking for!",
    body: "We have just the product you need. It's the best product ever. You will love it!",
  },
  content: [
    {
      id: "d3405d76-d244-494d-9ef7-7bc70df01108",
      component: "MediaContent",
      headline: "Our Product",
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
      id: "f49c67ae-b10f-44d2-81ef-be92c1007c98",
      component: "CommonContent",
      headline: "Advantages",
      body: "We listen to our customers and provide the best products.",
    },
    {
      id: "b0024613-8e25-4d90-9b32-a3365d725e92",
      component: "CommonContent",
      headline: "Our Mission",
      body: "Our mission is to provide the best products.",
    },
  ],
};
