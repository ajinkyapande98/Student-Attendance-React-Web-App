import React, { useState } from "react";
import Attendence from "./Attendence";

const Home = () => {
  const [StudentInfo, setStudentInfo] = useState([
    {
      studentName: "Ajinkya",
      rollNo: "60",
      checkin: "12:05",
      checkout: "02:35",
    },
  ]);
  const [StudentCount, setStudentCount] = useState(1);

  return (
    <>
      <h1 className="Heading">Student Present In the class: {StudentCount}</h1>
      {/* {console.log(StudentInfo)} */}
      <div className="Home_Container">
        <div className="table-head">
          <h3>Sr No</h3>
          <h3>Name</h3>
          <h3>Roll No</h3>
          <h3>Check In</h3>
          <h3>check Out</h3>
        </div>
        {StudentInfo.map((item, ind) => {
          return (
            <div key={ind} className="student-list">
              <li className="srNo">{++ind}.</li>
              <li className="stdName">{item.studentName}</li>
              <li className="stdRollNo">{item.rollNo}</li>
              <li className="stdcheckin">{item.checkin}</li>
              <li className="stdcheckout">{item.checkout}</li>
            </div>
          );
        })}
      </div>
      <div className="Attendence_Container">
        <Attendence
          StudentInfo={StudentInfo}
          setStudentInfo={setStudentInfo}
          StudentCount={StudentCount}
          setStudentCount={setStudentCount}
        />
      </div>
    </>
  );
};

export default Home;
