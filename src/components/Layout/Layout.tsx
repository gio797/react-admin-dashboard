import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Layout() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
