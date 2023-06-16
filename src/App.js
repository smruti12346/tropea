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
      <Router basename="/tropea">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path=":pages"
            element={<Page />}
          />
        </Routes>
        <ContactUs />
        <Footer />
      </Router>
    </>
  );
}

export default App;
