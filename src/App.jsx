import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Landing from "../Components/Landing/Landing";
import Blog3 from "../Components/Blog/Blog3";
import Blog2 from "../Components/Blog/Blog1";
import Blog1 from "../Components/Blog/Blog2";
import Header from "../Components/Header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
      <Route path = "/" element={<Landing/>}/>
        <Route path="residencies/blog/1" element={<Blog />} />
        <Route path="residencies/blog/2" element={<Blog1 />} />
        <Route path="residencies/blog/3" element={<Blog2 />} />
        <Route path="residencies/blog/4" element={<Blog3 />} />
      </Routes>
    </>
  );
}

export default App;
