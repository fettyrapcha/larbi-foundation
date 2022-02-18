import AccordionComponent from "./components/accordion";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";
import Newsletter from "./components/news-letter";

function App() {
  return (
    <div>
      <div className="w-11/12 my-0 mx-auto">
        <div className="sticky top-0">
          <Header />
        </div>
        <Landing />
        <div className="w-full md:w-9/12 my-0 mx-auto py-4">
          <AccordionComponent />
        </div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
