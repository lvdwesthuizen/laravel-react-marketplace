import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function WebsiteLayout() {
  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
