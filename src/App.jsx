import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import "./App.css";
import Residencies from "../Components/Residencies/Residencies";
import Blog from "../Components/Blog/Blog";
import Value from "../Components/Value/Value";
import Contact from "../Components/Contact/Contact";
import GetStarted from "../Components/GetStarted/GetStarted";
import Footer from "../Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Routes>
        <Route path="residencies/:id" element={<Blog />} />
      </Routes>
      <Residencies/>
      <Value />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
