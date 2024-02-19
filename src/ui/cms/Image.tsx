import { Image as ImageProps } from "@/infrastructure/cms/schemas";
import NextImage from "next/image";
import cx from "./Image.module.scss";

export const Image = ({ alt, src, height, width }: ImageProps) => {
  return (
    <NextImage
      className={cx.image}
      alt={alt}
      src={src}
      height={height}
      width={width}
    />
  );
};
