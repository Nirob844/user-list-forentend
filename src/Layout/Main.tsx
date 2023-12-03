import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <FooterComponent />
    </div>
  );
};

export default Main;
