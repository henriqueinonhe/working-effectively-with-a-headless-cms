import { Image as CmsImageProps } from "@/infrastructure/cms/schemas";
import { Image } from "../components/Image";

export const CmsImage = ({ alt, src, height, width }: CmsImageProps) => {
  return <Image alt={alt} src={src} height={height} width={width} />;
};
