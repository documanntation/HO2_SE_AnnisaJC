import React from "react";
import Image from "next/image";
import grammar from "../public/grammar.png";
import speaking from "../public/speaking.png";
import toefl from "../public/toefl.jpg";

const CourseSection = () => {
  const handleAlert = (courseName: string) => {
    alert(`${courseName} is still in progress!`);
  };

  const courses = [
    {
      src: grammar,
      alt: "Course 1",
      title: "Basic Grammar",
    },
    {
      src: speaking,
      alt: "Course 2",
      title: "Daily Conversation",
    },
    {
      src: toefl,
      alt: "Course 3",
      title: "TOEFL Preparation",
    },
  ];

  return (
    <section id="course" className="text-center p-8 bg-white">
      <h2 className="text-2xl text-blue-900 font-roboto mb-4">Our Courses</h2>
      <div className="flex justify-around flex-wrap">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-blue-200 border rounded-lg overflow-hidden shadow-lg w-1/3 m-4 transform hover:-translate-y-2 transition-transform"
          >
            <Image src={course.src} alt={course.alt} className="w-full" />
            <h3
              className="text-xl text-blue-900 font-roboto p-4 cursor-pointer"
              onClick={() => handleAlert(course.title)}
            >
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
