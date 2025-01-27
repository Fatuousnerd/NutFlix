import "./app.scss";
import "./index.css";
import Main from "./components/Main";
import ThemeProvider from "./utils/ThemeContext";
import ScrollToSection from "./ScrollToSection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./utils/UserContext";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <UserProvider>

          <Router>
            <div className="main">
              <ScrollToSection />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/*" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Router>

        </UserProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
