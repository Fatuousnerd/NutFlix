import './navbar.scss';
import ThemeToggle from "../../utils/ThemeTogggle";
import { X } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  return (
    <>
      <Sidebar />
      <nav className={scrolling ? "scrolled" : ""}>
        <a href="/">
          <img src="./icons/icon3.png" alt="" />
        </a>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/pages" style={{ gap: "5px" }}><X /> Pages</a></li>
          <li><a href="/merch">Merch</a></li>
          <li><a href="/creators">Creators</a></li>
          <li><a href="/live">Live Cams</a></li>
          {/* <li><a href="/creators">Gallery</a></li> */}
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <ThemeToggle />
        </ul>
      </nav>
    </>
  )
}

export default Navbar