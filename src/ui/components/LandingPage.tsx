import { ReactNode } from "react";
import cx from "./LandingPage.module.scss";

export type LandingPageProps = {
  hero: ReactNode;
  content: ReactNode;
};

export const LandingPage = ({ hero, content }: LandingPageProps) => {
  return (
    <div>
      {hero}

      {content}
    </div>
  );
};
