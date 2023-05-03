import { useState } from "react";
import { uid } from "uid";
import AddCourseSection from "../AddCourseSection";
import styled from "styled-components";
import styles from "@/styles/Home.module.css";
import Course from "../Course";
import { useEffect } from "react";
import Timer from "../Timer";

export default function Courses({
  courses,
  handleToggleAlarm,
  handleDeleteCourse,
}) {
  return (
    <>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, width: "80vw" }}>
        {courses.map((kursus) => (
          <Course
            handleToggleAlarm={handleToggleAlarm}
            key={uid()}
            course={kursus}
            handleDeleteCourse={handleDeleteCourse}
          ></Course>
        ))}
      </ul>
    </>
  );
}
