import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Footer sticks at the bottom; main scrolls over it */}
      <div className="relative flex-1 flex flex-col">
        <main className="relative z-10 flex-1 bg-background">
          {children}
        </main>
        <div className="sticky bottom-0 z-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
