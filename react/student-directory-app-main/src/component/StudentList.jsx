import React from "react";
import StudentCard from "./StudentCard";

function StudentList(props) {
 

  return (
    <>
     <StudentCard students={props.students}/>
    </>
  );
}

export default StudentList;