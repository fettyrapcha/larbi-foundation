import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AccordionComponent from "./components/accordion";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Features from "./components/features";
// import Landing from "./components/landing";
// import Newsletter from "./components/news-letter";
// import Pricing from "./components/pricing";
// import Team from "./components/team";
// import Testimonial from "./components/testimonial";

import Home from "./pages/Home";
import About from "./pages/about";
import Faq from "./pages/faq";
import Events from "./pages/events";
import Contact from "./pages/contact";
import ApplyPage from "./pages/applyPage";
import Development from "./pages/development";

function App() {
  return (
    <div>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/under" element={<Development />} />




          </Routes>

          {/* <Header />
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
          <Testimonial />
          <Team />
          <Footer /> */}

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
