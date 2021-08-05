import React, { FC } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface Props {}

const Layout: FC<Props> = ({ children, ...props }) => {
  return (
    <main {...props}>
      <Navigation />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
