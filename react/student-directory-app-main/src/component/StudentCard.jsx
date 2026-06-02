 
 import React, { useState} from "react";
 
 function StudentCard(props) {
    let studentData = props.students;
 

  return (
    <>
     <ul className="list">
        {studentData.map((el, index) => {
          return (
            <li key={index} style={{ listStyle: "none" }}>
              <div className="card">
                {el.isActive ? (
                  <p id="enrolled">✅Enrolled</p>
                ) : (
                  <p id="alumni">🎓Alumni</p>
                )}

                <p id="name">{el.name}</p>
                <p id="age">Age :{el.age}</p>
                <p id="course">Course : {el.course}</p>
                <p id="id">Student ID : #{el.id}</p>

                <button type="button" className="button">
                  Select
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default StudentCard;