import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/page/Page";
function App() {
  return (
    <>
      <Router basename="/">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          {/* <Route
            path="/about"
            element={<About />}
          /> */}
          <Route
            path=":pages"
            element={<Page />}
          />
          {/* <About />*/}
        </Routes>
        <ContactUs />
        {/* <Map /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
