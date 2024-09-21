import './cookiespop.scss';
import { GitHub, Instagram, Mail, Phone, X, Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";

const CookiesPop = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        // Check if the cookie is already present
        const cookieConsent = Cookies.get('cookieConsent');
        if (!cookieConsent) {
            setPopupVisible(true); // Show the popup if no consent cookie
        }
    }, []);

    const handleClose = () => {
        // Set a cookie to indicate that the user has accepted
        Cookies.set('cookieConsent', 'true', { expires: 365 }); // cookie expires in 1 year
        setPopupVisible(false); // Hide the popup
    };

    if (!isPopupVisible) return null; // Don't render anything if the popup is hidden

    return (
        <div className="cookiespop">
            <p>
                By using this website, you automatically accept that we use cookies.
                Learn more about our <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy & cookies policies.</a>
            </p>
            <button onClick={handleClose}>
                <Close />
            </button>
        </div>
    );
};

export default CookiesPop