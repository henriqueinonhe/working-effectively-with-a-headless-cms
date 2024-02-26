import { Image as CmsImageProps } from "@/infrastructure/cms/schemas";

import dynamic from "next/dynamic";

const Image = dynamic(() => import("../components/Image").then((m) => m.Image));

export const CmsImage = ({ alt, src, height, width }: CmsImageProps) => {
  return <Image alt={alt} src={src} height={height} width={width} />;
};
