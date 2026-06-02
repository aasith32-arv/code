import React from "react";
import StudentList from "../component/StudentList";

function Home(props) {
  return (
    <>
      <div className="container">
        <div className="hero">
          <h4>Student Directory</h4>
          <p>showing {props.students.length} students</p>
          <div className="btn2">
            <input type="text" id="search" placeholder="Search by name..." />
            <div className="btn1">
              <button type="button">All</button>
              <button type="button" id="entrolled">
                Enrolled
              </button>
              <button type="button">Alumni</button>
            </div>
          </div>
        </div>
        <div>
          <StudentList students={props.students} />
        </div>
      </div>
    </>
  );
}

export default Home;
