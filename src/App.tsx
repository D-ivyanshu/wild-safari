import HomePage from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import TourPackages from "./pages/TourPackages";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomePage />
      <About />
      <Service />
      <TourPackages />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
