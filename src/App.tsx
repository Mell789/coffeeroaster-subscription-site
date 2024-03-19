import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="px-24 px-md-40 px-xl-80">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
