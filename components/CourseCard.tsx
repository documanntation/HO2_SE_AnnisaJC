import React from "react";
import ImageComponent from "./ImageComponent";
import Heading from "./Heading";
import { StaticImageData } from "next/image";

type CourseCardProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  onClick: () => void;
};

const CourseCard: React.FC<CourseCardProps> = ({
  src,
  alt,
  title,
  onClick,
}) => {
  return (
    <div className="bg-blue-200 border rounded-lg overflow-hidden shadow-lg w-1/3 m-4 transform hover:-translate-y-2 transition-transform">
      <ImageComponent src={src} alt={alt} className="w-full" />
      <div
        className="text-xl text-blue-900 font-roboto p-4 cursor-pointer"
        onClick={onClick}
      >
        <Heading level={3} className="">
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default CourseCard;
