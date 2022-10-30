export default function Cohort({ studentArr, setStudentArr, studentData }) {
  function listCohorts(studentData) {
    const possibleCohorts = {};
    for (const student of studentData) {
      possibleCohorts[student.cohort.cohortCode] =
        student.cohort.cohortStartDate;
    }
    let sortable = [];
    for (const cohort in possibleCohorts) {
      sortable.push([cohort, possibleCohorts[cohort]]);
    }
    sortable.sort((a, b) => {
      return new Date(b[1]) - new Date(a[1]);
    });
    // console.log(sortable);

    return sortable.map((cohort) => {
      return (
        <h2
          id={cohort[1]}
          key={cohort[1]}
          className="cohort"
          onClick={(e) => displayCohort(e)}
        >
          {cohort[0].split(/(?<=\D)(?=\d)/).join(" ")}
        </h2>
      );
    });
  }

  function resetCohorts() {
    setStudentArr(studentData);
  }

  function displayCohort(e) {
    const filteredStudents = studentData.filter(
      (student) => student.cohort.cohortStartDate === e.target.id
    );
    setStudentArr(filteredStudents);
    console.log(studentArr);
  }

  return (
    <div>
      <h2 id="all-students" className="cohort" onClick={resetCohorts}>
        All Students
      </h2>
      {listCohorts(studentData)}
    </div>
  );
}
