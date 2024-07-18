import React from "react";
import Image, { StaticImageData} from "next/image";

type ImageComponentProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className,
}) => {
  return <Image src={src} alt={alt} className={className} />;
};

export default ImageComponent;
