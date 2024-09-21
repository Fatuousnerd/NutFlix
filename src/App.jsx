import './app.scss';
import Main from "./components/main/Main";
import About from './components/about/About';
import Pages from './components/pages/Pages';
import Gallery from './components/gallery/Gallery';
import Merch from './components/merch/Merch';
import Creators from './components/creators/Creators';
import Contact from './components/contact/Contact';
import Faqs from './components/faqs/Faqs';
import FourOFour from "./components/fourofour/FourOFour";
import Privacy from "./components/privacy/Privacy";
import ThemeProvider from "./utils/ThemeContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Live from './components/live/Live';

const App = () => {
  return <>
    <ThemeProvider>
      <Router>
        <div className="main">
          <Routes>
            <Route path='/*' element={<FourOFour />} />
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/pages' element={<Pages />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/merch' element={<Merch />} />
            <Route path='/creators' element={<Creators />} />
            <Route path='/live' element={<Live />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faqs' element={<Faqs />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  </>
};

export default App;
