import { useState } from "react";
import styled from "styled-components";

const StyledAddSection = styled.section`
  border: 2px grey solid;
  padding: 2rem;
  width: 80vw;
  display: grid;
`;

export default function AddCourseSection() {
  const [url, setUrl] = useState("");
  const [css, setCss] = useState("");
  const [courseName, setCourseName] = useState("");
  return (
    <div>
      <StyledAddSection>
        <label>URL:</label>
        <br />
        <input
          type="text"
          value={url}
          onChange={(c) => setUrl(c.target.value)}
        ></input>
        <br />
        <label>Css selector:</label>
        <br />
        <input
          type="text"
          value={css}
          onChange={(c) => setCss(c.target.value)}
        ></input>
        <br />
        <label>Course name:</label>
        <br />
        <input
          type="text"
          value={courseName}
          onChange={(c) => setCourseName(c.target.value)}
        ></input>
        <br />
        <button
          style={{ marginTop: "20px", padding: "4px", fontSize: "20px" }}
          onClick={() => onAddCourse({ url: url, kurs: courseName, css: css })}
        >
          Add course
        </button>
      </StyledAddSection>
    </div>
  );
}
