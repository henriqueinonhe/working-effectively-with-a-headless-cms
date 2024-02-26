import { Image as CmsImageOwnProps } from "@/infrastructure/cms/schemas";

import dynamic from "next/dynamic";

const Image = dynamic(() => import("../components/Image").then((m) => m.Image));

export const makeRenderCmsImage =
  ({ alt, src, height, width }: CmsImageOwnProps) =>
  () => {
    return <Image alt={alt} src={src} height={height} width={width} />;
  };
