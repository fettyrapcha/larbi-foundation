import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionComponent from "./components/accordion";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";
import Newsletter from "./components/news-letter";
import Pricing from "./components/pricing";

function App() {
  return (
    <div>
      <div className="">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/frequently-asked-questions"
              element={
                <div className="w-full md:w-9/12 my-0 mx-auto py-4">
                  <AccordionComponent />
                </div>
              }
            />
            <Route path="/" element={<Landing />} />
          </Routes>
          <Features />
          <Pricing />
          <Newsletter />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
