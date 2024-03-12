import React from 'react'
import { Routes, Route } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Landing from '../Components/Landing/Landing';

function App() {
  return (
    <>
      <Landing/>
    <Routes>
    <Route path="residencies/:id" element={<Blog />} />
  </Routes>
      
    </>


  );
}

export default App;
