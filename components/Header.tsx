import React from "react";
import Image from "next/image";
import learn from "../public/learn-english.webp";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 bg-blue-50">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-blue-900 font-roboto">
          Eng<span className="text-blue-300">Lez!</span>
        </h1>
        <h3 className="text-2xl text-gray-600 font-roboto">English is EZ!</h3>
        <p className="text-lg text-blue-900 font-roboto">
          We are here to offer a top-quality English learning platform!
        </p>
        <button
          className="mt-4 px-4 py-2 text-lg text-white bg-blue-300 rounded hover:bg-gray-500"
          onClick={() =>
            document
              .getElementById("course")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Check Our Courses
        </button>
      </div>
      <div className="max-w-md">
        <Image
          src={learn}
          alt="EngLez"
          layout="responsive"
          width={400}
          height={300}
          className="rounded"
        />
      </div>
    </header>
  );
};

export default Header;
