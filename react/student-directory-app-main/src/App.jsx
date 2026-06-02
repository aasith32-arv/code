import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import StudentCard from "./component/StudentCard";
import StudentList from "./component/StudentList";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";


function App() {
  let students = [
    {
      id: 1,
      name: "Amal Perera",
      age: 21,
      course: "Information Technology",
      isActive: true,
    },
    
    {
      id: 3,
      name: "Kasun Fernando",
      age: 20,
      course: "Engineering",
      isActive: true,
    },
    {
      id: 4,
      name: "Dilani Ranasinghe",
      age: 23,
      course: "Information Technology",
      isActive: true,
    },
    {
      id: 2,
      name: "Nimesha Silva",
      age: 22,
      course: "Business Management",
      isActive: false,
    },
    
    {
      id: 6,
      name: "Sanduni Jayawardena",
      age: 22,
      course: "Engineering",
      isActive: true,
    },
    {
      id: 5,
      name: "Tharindu Wijesinghe",
      age: 21,
      course: "Business Management",
      isActive: false,
    },
  ];

  useEffect(() => {
    console.log("Student DirectoryLoaded");
    document.title = `${students.length} Students | Directory`;
  }, []);

  return (
    <>
     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home students={students} />}/>
            <Route path="/about" element={<About />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
