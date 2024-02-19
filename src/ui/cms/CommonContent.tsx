import { CommonContent as CommonContentProps } from "@/infrastructure/cms/schemas";
import cx from "./CommonContent.module.scss";

export const CommonContent = ({ headline, body }: CommonContentProps) => {
  return (
    <div className={cx.container}>
      <h3 className={cx.headline}>{headline}</h3>

      <p className={cx.body}>{body}</p>
    </div>
  );
};
