import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Moduel from "./component/Moduel";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Moduel />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          
            
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
