import styles from "@/styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 20px;
  padding: 1 px;
  border: none;
  background-color: transparent;
  padding-top: 4px;
`;

export default function Course({
  course,
  handleToggleAlarm,
  handleDeleteCourse,
}) {
  return (
    <li className={styles.card} key={course?.id}>
      <div>
        <p>{course.kurs}</p>
      </div>

      <p className="status__paragraph">
        Status:{" "}
        <span
          style={{
            color: course.status === "Vormerkliste" ? "green" : "red",
            fontWeight: course.status === "Vormerkliste" ? "bold" : "normal",
            fontSize: course.status === "Vormerkliste" ? "17px" : "16px",
          }}
        >
          {" "}
          {course.status}
        </span>
      </p>

      <div
        className="card__buttonContainer"
        style={{ display: "flex", gap: "10px" }}
      >
        <StyledButton onClick={() => handleToggleAlarm(course.id)}>
          {course.alarm ? "✔️" : "⏰"}
        </StyledButton>
        <StyledButton onClick={() => window.open(course.url, "_blank")}>
          🌐
        </StyledButton>
        <StyledButton onClick={() => handleDeleteCourse(course.id)}>
          ❌
        </StyledButton>
      </div>
    </li>
  );
}
