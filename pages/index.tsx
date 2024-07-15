import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CourseSection from "../components/CourseSection";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>EngLez!</title>
      </Head>
      <Navbar />
      <Header />
      <CourseSection />
      <Footer />
    </div>
  );
};

export default Home;
