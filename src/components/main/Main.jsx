import CookiesPop from "../cookiespop/CookiesPop";
import Hero from "../hero/Hero";
import ScrollUp from "../scrollUp/ScrollUp";
import Footer from "../footer/Footer";
import SocialBar from "../sb-bar/SocialBar";

const Main = () => {
    return (
        <>
            {/* <SocialBar /> */}
            <ScrollUp />
            <CookiesPop />
            <Hero />
            <Footer />
        </>
    )
};

export default Main;