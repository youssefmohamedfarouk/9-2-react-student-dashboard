import Student from "./Student";

export default function Students({ studentArr }) {
  function determineHeading(studentArr) {
    if (studentArr.length === 250) {
      return "All Students";
    } else {
      return studentArr[0].cohort.cohortCode.split(/(?<=\D)(?=\d)/).join(" ");
    }
  }

  function createStudentList() {
    return studentArr.map((student) => {
      const birthdate = new Date(student.dob);
      const formattedBDay = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
      })
        .format(birthdate)
        .split(" at ")[0];
      return <Student student={student} formattedBDay={formattedBDay} key={student.id}/>;
    });
  }

  return (
    <ul className="students">
      <h2 className="determined-heading">{determineHeading(studentArr)}</h2>
      <p>Total Students: {studentArr.length}</p>
      {createStudentList()}
    </ul>
  );
}
