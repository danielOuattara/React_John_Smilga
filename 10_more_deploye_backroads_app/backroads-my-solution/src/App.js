import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Service from "./components/Service";
import About from "./components/About";
import Footer from "./components/Footer";
import Tours from "./components/Tours";

function App() {
  return (
    <div className="App">
      <Hero />
      <NavBar />
      <About />
      <Service />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
