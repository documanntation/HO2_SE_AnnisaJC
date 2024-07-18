import React from "react";
import ImageComponent from "../components/ImageComponent";
import Heading from "../components/Heading";
import Button from "../components/button";
import learn from "../public/learn-english.webp";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-8 bg-blue-50">
      <div className="max-w-xl">
        <Heading
          level={1}
          className="text-4xl font-bold text-blue-900 font-roboto"
        >
          Eng<span className="text-blue-300">Lez!</span>
        </Heading>
        <Heading level={3} className="text-2xl text-gray-600 font-roboto">
          English is EZ!
        </Heading>
        <p className="text-lg text-blue-900 font-roboto">
          We are here to offer a top-quality English learning platform!
        </p>
        <Button
          text="Check Our Courses"
          onClick={() =>
            document
              .getElementById("course")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div className="max-w-md">
        <ImageComponent src={learn} alt="EngLez" className="rounded" />
      </div>
    </header>
  );
};

export default Header;
