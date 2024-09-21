import './verif.scss';
import { useEffect, useState } from 'react';
import Cookies from "js-cookie";

const Verif = () => {

    const [isPop, setIsPop] = useState(false);

    useEffect(() => {
        const cookieAge = Cookies.get('cookieAge');
        if(!cookieAge){
            setIsPop(true);
        }
    }, []);

    const Closer = () => {
        Cookies.set('cookieAge', 'older', {expires: 365});
        setIsPop(false);
    };

    if(!isPop) return null;

    return (
        <>
            <div className="verif">
                <div className="cont">
                    <h1>
                        This website contains adult-oriented content intended for individuals 18 years of age or older.
                        By accessing this site, you confirm that you are at least 18 years old(or legal age of majority in your country) and legally permitted to view such content in your country.
                        All models and performers featured are over the legal age of majority.
                        Viewer discretion is advised.
                        Do you confirm that you're 18yrs or older?
                    </h1>
                    <div className="btns">
                        <button>
                            <a href='https://google.com'>
                                No, I'm not
                            </a>
                        </button>
                        <button onClick={Closer}>
                            Yes, I'm 18
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verif