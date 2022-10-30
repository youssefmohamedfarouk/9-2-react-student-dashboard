import { useState } from "react";
import OneOnOne from "./OneOnOne";

export default function Student({ student, formattedBDay }) {
  const [detailsShown, setDetailsShown] = useState(false);
  const [buttonText, setButtonText] = useState("Show more...");
  const [notes, setNotes] = useState(student.notes);
  console.log(student);
  function buttnClick() {
    if (detailsShown) {
      setDetailsShown(false);
      setButtonText("Show more...");
      //   console.log(detailsShown);
    } else {
      setDetailsShown(true);
      setButtonText("Show less...");
      //   console.log(detailsShown);
    }
  }

  function hasCert(bool) {
    return bool ? "✅" : "❌";
  }

  function codeWarsProgress(student) {
    const percentage = (
      (student.codewars.current.total / student.codewars.goal.total) *
      100
    ).toFixed(0);
    if (percentage >= 100) {
      return <span style={{ color: "hotpink" }}>{percentage}%</span>;
    } else if (percentage < 100 && percentage >= 50) {
      return <span style={{ color: "yellow" }}>{percentage}%</span>;
    } else {
      return <span style={{ color: "red" }}>{percentage}%</span>;
    }
  }

  function onTrack(student) {
    if (
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.mockInterview &&
      student.certifications.github
    ) {
      return <p>On Track to Graduate ✅</p>;
    } else {
      return <p>Not Yet On Track to Graduate ❌</p>;
    }
  }
  const studentNameArr = Object.values(student.names);
  studentNameArr[1] = studentNameArr[1][0] + ".";

  return (
    <li className="student">
      <img src={student.profilePhoto}></img>
      <div>
        <h3>{studentNameArr.join(" ")}</h3>
        <p>{student.username}</p>
        <p>Birthday: {formattedBDay}</p>
        {/* <br /> */}
        <button onClick={buttnClick}>{buttonText}</button>
        {detailsShown ? (
          <div id="student-details" className={detailsShown}>
            <div>
              <h4>Codewars:</h4>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week: {student.codewars.current.lastWeek}</p>
              <p>Goal: {student.codewars.goal.total}</p>
              <p>Percentage of Goal Achieved: {codeWarsProgress(student)}</p>
            </div>
            <div>
              <h4>Scores:</h4>
              <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
              <p>Projects: {student.cohort.scores.projects * 100}%</p>
              <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
            </div>
            <div>
              <h4>Certifications:</h4>
              <p>Resume: {hasCert(student.certifications.resume)}</p>
              <p>LinkedIn: {hasCert(student.certifications.linkedin)}</p>
              <p>
                Mock Interview: {hasCert(student.certifications.mockInterview)}
              </p>
              <p>Github: {hasCert(student.certifications.github)}</p>
            </div>
            <OneOnOne notes={notes} setNotes={setNotes} />
          </div>
        ) : null}
      </div>
      <div className="on-track">{onTrack(student)}</div>
    </li>
  );
}
