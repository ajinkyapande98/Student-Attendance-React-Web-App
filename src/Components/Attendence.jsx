import React, { useState } from "react";

const Attendence = (props) => {
  const { StudentInfo, setStudentInfo, StudentCount, setStudentCount } = props;
  const [stdName, setStdName] = useState("");
  const [stdRollNo, setStdRollNo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const sendStudentInfo = () => {
    if (!stdName && !stdRollNo && !checkIn && !checkOut) {
      return;
    }
    setStudentInfo([
      ...StudentInfo,
      {
        studentName: stdName,
        rollNo: stdRollNo,
        checkin: checkIn,
        checkout: checkOut,
      },
    ]);
    setStudentCount(StudentCount + 1);
    setStdName("");
    setStdRollNo("");
    setCheckIn("");
    setCheckOut("");
  };
  return (
    <div className="Attendence-form">
      <h1>Student Entry</h1>
      <input
        className="StudentName"
        type="text"
        placeholder="Enter Student Name"
        onChange={(e) => setStdName(e.target.value)}
        value={stdName}
      />
      <input
        className="rollNo"
        type="number"
        placeholder="Enter Roll No"
        onChange={(e) => setStdRollNo(e.target.value)}
        value={stdRollNo}
      />
      <br />
      <input
        className="check-in-time"
        type="time"
        name=""
        id=""
        placeholder="Enter Check In Time"
        onChange={(e) => setCheckIn(e.target.value)}
        value={checkIn}
      />{" "}
      <br />
      <input
        className="check-out-time"
        type="time"
        name=""
        id=""
        placeholder="Enter Check out Time"
        onChange={(e) => setCheckOut(e.target.value)}
        value={checkOut}
      />
      <button className="Submit" onClick={() => sendStudentInfo()}>
        Submit
      </button>
    </div>
  );
};

export default Attendence;
