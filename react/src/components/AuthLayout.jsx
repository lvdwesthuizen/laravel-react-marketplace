import Header from "./Header";
import Footer from "./Footer";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function AuthLayout() {
  const { userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/create" />;
  }

  return (
    <>
      <Header />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
