import React from "react";
import CourseCard from "./CourseCard";
import Heading from "./Heading";
import grammar from "../public/grammar.png";
import speaking from "../public/speaking.png";
import toefl from "../public/toefl.jpg";

const CourseSection: React.FC = () => {
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
      <Heading level={2} className="text-2xl text-blue-900 font-roboto mb-4">
        Our Courses
      </Heading>
      <div className="flex justify-around flex-wrap">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            src={course.src}
            alt={course.alt}
            title={course.title}
            onClick={() => handleAlert(course.title)}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
