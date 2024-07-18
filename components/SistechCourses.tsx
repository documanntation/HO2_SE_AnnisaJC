import React, { useState, useEffect } from "react";
import styles from "../src/app/globals.module.css";

interface Course {
  id: number;
  course: string;
  description: string;
  imgUrl: string;
  totalTopics: number;
  topics: { topicId: number; name: string; content: string }[];
  lecturers: string[];
}

const SistechCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sistech-server.vercel.app/api/data"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCourses(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles["course-list"]}>
      {courses.map((course) => (
        <div key={course.id} className={styles["course-card"]}>
          <img
            src={course.imgUrl}
            alt={course.course}
            className={styles["course-img"]}
          />
          <div className={styles["course-details"]}>
            <h2>{course.course}</h2>
            <p>{course.description}</p>
            <h3>Topics:</h3>
            <ul>
              {course.topics.map((topic) => (
                <li key={topic.topicId}>
                  <strong>{topic.name}</strong>: {topic.content}
                </li>
              ))}
            </ul>
            <h3>Lecturers:</h3>
            <ul>
              {course.lecturers.map((lecturer, index) => (
                <li key={index}>{lecturer}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SistechCourses;
