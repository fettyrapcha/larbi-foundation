import AccordionComponent from "./components/accordion";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div>
      <div className="w-11/12 my-0 mx-auto">
        <Header />
        <div className="w-full md:w-9/12 my-0 mx-auto py-4">
          <AccordionComponent />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
