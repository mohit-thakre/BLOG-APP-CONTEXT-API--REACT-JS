import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Foot from "./components/Foot";
import { Appcontext } from "./context/context";

const App = () => {
  const { fetchBlog } = useContext(Appcontext);
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div className="bg-[#040926]">
      <Navbar />
      <Main />
      <Foot />
    </div>
  );
};

export default App;
