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
      id: "f49c67ae-b10f-44d2-81ef-be92c1007c98",
      component: "Content",
      headline: "Advantages",
      body: "We listen to our customers and provide the best products.",
    },
    {
      id: "b0024613-8e25-4d90-9b32-a3365d725e92",
      component: "Content",
      headline: "Our Mission",
      body: "Our mission is to provide the best products.",
    },
  ],
};
