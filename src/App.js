import "./App.scss";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Faq from "./Components/FAQ";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Welcome />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
