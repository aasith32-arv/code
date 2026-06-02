import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />

            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
