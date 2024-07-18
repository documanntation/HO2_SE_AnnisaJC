import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "./Header";
import CourseSection from "../components/CourseSection";
import Footer from "./Footer";
import SistechCourses from "../components/SistechCourses";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EngLez!</title>
      </Head>
      <Navbar />
      <Header />
      <CourseSection />
      <div className="text-blue-900 text-2xl font-roboto text-center">
        Sistech<span className="text-blue-300">Courses</span>
      </div>
      <SistechCourses />
      <Footer />
    </div>
  );
};

export default Home;
