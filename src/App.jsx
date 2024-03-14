import "./App.css";
import AboutCoaching from "./components/about-coaching/AboutCoaching";
import FastGrowth from "./components/fast-growth/FastGrowth";
import IfSection from "./components/if-you-section/IfSection";
// import About from "./components/about_section/About";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
// import Price from "./components/price_section/Price";
// import Requests from "./components/requests_section/Requests";

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Main />
      <IfSection />
      {/* <About />
      <Requests />
      <Price /> */}
      <FastGrowth />
      <AboutCoaching />
    </div>
  );
}

export default App;
