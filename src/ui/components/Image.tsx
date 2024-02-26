import NextImage from "next/image";
import cx from "./Image.module.scss";

export type ImageProps = {
  alt: string;
  src: string;
  height: number;
  width: number;
};

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
