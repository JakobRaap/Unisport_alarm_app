import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Courses from "../../components/Courses";
import AddCourseSection from "../../components/AddCourseSection";
import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
const inter = Inter({ subsets: ["latin"] });
const soundUrl = "./alarm.mp3";

export default function Home({
  onAddCourse,
  courses,
  UpdateAllCourses,
  handleToggleAlarm,
  handleDeleteCourse,
}) {
  const [play] = useSound(soundUrl);
  useEffect(() => {
    UpdateAllCourses();
  }, []);

  useEffect(() => {
    const updateCoursesInterval = setInterval(useUpdateAllCourses, 10000);
    const playAlarmInterval = setInterval(() => {
      const filteredCourses = courses.filter((course) => course.alarm == true);
      console.warn(filteredCourses);
      const c = filteredCourses.find((c) => c.status === "Vormerkliste");
      if (c) {
        handleToggleAlarm(c.id);
        play();
      }
    }, 5000);
    return () => {
      clearInterval(updateCoursesInterval);
      clearInterval(playAlarmInterval);
    };
  }, [courses, handleToggleAlarm, play, useUpdateAllCourses]);

  return (
    <>
      <Head>
        <title>Unisport Alarm App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Courses
          handleToggleAlarm={handleToggleAlarm}
          courses={courses}
          handleDeleteCourse={handleDeleteCourse}
        ></Courses>
      </main>
    </>
  );
}
