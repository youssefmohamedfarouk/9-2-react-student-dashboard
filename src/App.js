import { useState } from "react";
import "./App.css";
import Cohorts from "./components/Cohorts";
import Students from "./components/Students";
import studentData from "./data/data.json";

function App() {
  // const dataClone = structuredClone(studentData);
  const [studentArr, setStudentArr] = useState(studentData);
  console.log(studentArr);

  return (
    <div className="body">
      <h1>Student Dashboard</h1>
      <div className="main-content">
        <Cohorts
          studentArr={studentArr}
          setStudentArr={setStudentArr}
          studentData={studentData}
          // dataClone={dataClone}
        />
        <Students studentArr={studentArr} />
      </div>
    </div>
  );
}

export default App;
