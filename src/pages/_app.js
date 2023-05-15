import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialCourses = [
    {
      id: 1,
      kurs: "Beach Kurs 3 A",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Beachvolleyball.html",
      css: "#bs_tr515CF67BE4 > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
    {
      id: 2,
      kurs: "Beach Kurs 3 B",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Beachvolleyball.html",
      css: "#bs_tr515CF67B7B > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
    {
      id: 3,
      kurs: "Beach Kurs 3 C",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Beachvolleyball.html",
      css: "#bs_tr515CF6502B > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
    {
      id: 4,
      kurs: "Halle 2+3",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Volleyball.html",
      css: "#bs_tr515C4D54C5 > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
    {
      id: 5,
      kurs: "Halle 3",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Volleyball.html",
      css: "#bs_tr515C4DA94F > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
    {
      id: 6,
      kurs: "Beach 1 Mo 16:00",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Volleyball.html",
      css: "#bs_tr515CF650E6 > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
    {
      id: 7,
      kurs: "Beach 1 Mi 19:00",
      url: "https://buchung.hochschulsport-hamburg.de/angebote/Sommersemester_2023/_Volleyball.html",
      css: "#bs_tr515CF6AD28 > td:nth-child(9) > input:nth-child(2)",
      status: "unknown",
      alarm: false,
    },
  ];

  const [courses, setCourses] = useState(initialCourses);

  async function getStatus(ip, css) {
    const res = await fetch("/api/getStatus", {
      method: "POST",
      body: JSON.stringify({ ip, css }),
    });
    const { course } = await res.json();
    return course;
  }

  async function updateAllCourses() {
    const updatedCourses = await Promise.all(
      courses.map(async (c) => {
        const currentStatus = await getStatus(c.url, c.css);
        console.log(c.kurs, currentStatus);
        return { ...c, status: currentStatus };
      })
    );
    setCourses(updatedCourses);
  }

  function handleAddStatus(id, status) {
    const updatedCourses = courses.map((c) => {
      return c.id === id ? { ...c, status: status } : c;
    });

    setCourses(updatedCourses);
  }

  function onToggleAlarm(id) {
    const updatedCourses = courses.map((c) => {
      return c.id === id ? { ...c, alarm: !c.alarm } : c;
    });
    setCourses(updatedCourses);
  }

  function handleAddCourse() {}
  function handleDeleteCourse(id) {
    const updatedCourses = courses.filter((c) => c.id !== id);
    setCourses(updatedCourses);
  }

  return (
    <Component
      {...pageProps}
      onAddStatus={handleAddStatus}
      initialCourses={initialCourses}
      courses={courses}
      onAddCourse={handleAddCourse}
      updateAllCourses={updateAllCourses}
      handleToggleAlarm={onToggleAlarm}
      handleDeleteCourse={handleDeleteCourse}
    />
  );
}
