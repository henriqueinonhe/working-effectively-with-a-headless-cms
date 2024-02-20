import { CommonContent } from "@/ui/components/CommonContent";
import { Hero } from "@/ui/components/Hero";
import { LandingPage } from "@/ui/components/LandingPage";

const Other = () => {
  return (
    <LandingPage
      hero={<Hero headline="Hello" body="Hello World!" />}
      content={<CommonContent headline="Dubs" body="Dobs" />}
    />
  );
};

export default Other;
