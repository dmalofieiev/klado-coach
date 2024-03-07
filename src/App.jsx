import "./App.css";
import About from "./components/about_section/About";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Price from "./components/price_section/Price";
import Requests from "./components/requests_section/Requests";

function App() {
  return (
    <div className="mainDiv">
      <Navbar />
      <Main />
      <About />
      <Requests />
      <Price />
    </div>
  );
}

export default App;
