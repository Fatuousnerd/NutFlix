import './privacy.scss';
import Navbar from '../navbar/Navbar';

const Privacy = () => {
    return (
        <>
            <Navbar />
            <div className="privacy">
                <h1>
                    Privacy and Cookies Policy
                </h1>
                <p>
                    At NutFlixx, we value your privacy. We use cookies to enhance your experience, analyze website traffic, and personalize advertisements. By using our site, you agree to our use of cookies. Your data is kept confidential and used only for necessary purposes. For more information, please <a href="/contact" style={{color:"var(--main-color)", fontWeight:"850"}}>Contact Us Here</a>.
                </p>
            </div>
        </>
    )
}

export default Privacy