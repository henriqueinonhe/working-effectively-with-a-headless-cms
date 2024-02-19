import { Hero as HeroProps } from "@/infrastructure/cms/schemas";
import cx from "./Hero.module.scss";

export const Hero = ({ headline, body }: HeroProps) => {
  return (
    <div className={cx.container}>
      <h2 className={cx.headline}>{headline}</h2>

      <p className={cx.body}>{body}</p>
    </div>
  );
};
