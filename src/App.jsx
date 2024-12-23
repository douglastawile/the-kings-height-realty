import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Services from "./pages/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Flowbite>
        <header>
          <Navigation />
        </header>
        <main className="mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/about"
              element={
                <h1 className="text-slate-700 dark:text-slate-100 text-4xl font-bold text-center my-2">
                  About
                </h1>
              }
            />
            <Route
              path="/contact"
              element={
                <h1 className="text-slate-700 dark:text-slate-100 text-4xl font-bold text-center my-2">
                  Contact
                </h1>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Flowbite>
    </BrowserRouter>
  );
}
