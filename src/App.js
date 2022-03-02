import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccordionComponent from "./components/accordion";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";
import Newsletter from "./components/news-letter";

function App() {
  return (
    <div>
      <div className="w-11/12 my-0 mx-auto">
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
          <Newsletter />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
