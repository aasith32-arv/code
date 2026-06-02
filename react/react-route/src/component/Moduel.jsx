import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Moduel() {
  return (
    <>
    <div className="moduel">
      <Header />

      <Outlet />

      <Footer />
      </div>
    </>
  );
}

export default Moduel;
