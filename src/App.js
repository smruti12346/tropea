import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/page/Page";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./components/blog/Blog";
import Single from "./components/blog/Single";
function App() {
  return (
    <>
      <HelmetProvider>
        <Router basename="/">
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
            <Route
              path="blog"
              element={<Blog />}
            />
            <Route
              path="blog/:pages"
              element={<Single />}
            />
          </Routes>
          <ContactUs />
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
