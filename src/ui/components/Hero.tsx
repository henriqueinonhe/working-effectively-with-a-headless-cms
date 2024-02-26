import cx from "./Hero.module.scss";

export type HeroProps = {
  headline: string;
  body: string;
};

export const Hero = ({ headline, body }: HeroProps) => {
  return (
    <div className={cx.container}>
      <h2 className={cx.headline}>{headline}</h2>

      <p className={cx.body}>{body}</p>
    </div>
  );
};
