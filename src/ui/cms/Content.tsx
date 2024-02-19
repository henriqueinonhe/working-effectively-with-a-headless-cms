import { Content as ContentProps } from "@/infrastructure/cms/schemas";
import cx from "./Content.module.scss";

export const Content = ({ headline, body }: ContentProps) => {
  return (
    <div className={cx.container}>
      <h3 className={cx.headline}>{headline}</h3>

      <p className={cx.body}>{body}</p>
    </div>
  );
};
