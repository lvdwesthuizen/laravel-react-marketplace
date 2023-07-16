/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container mx-auto my-10">{children}</div>
      <Footer />
    </>
  );
}
