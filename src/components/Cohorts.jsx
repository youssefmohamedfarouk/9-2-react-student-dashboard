import Cohort from "./Cohort";

export default function Cohorts({ studentArr, setStudentArr, studentData}) {
  return (
    <div className="cohorts">
      <h2>Choose a Class by Start Date</h2>
      <Cohort
        studentArr={studentArr}
        setStudentArr={setStudentArr}
        studentData={studentData}
      />
    </div>
  );
}
