import './live.scss';
import Navbar from '../navbar/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Live = () => {

    const [value, setValue] = useState(5);
    const history = useNavigate();

    useEffect(() => {
        const liver = document.getElementById('liver');
        if (value > 0) {
            const interval = setInterval(() => {
                setValue((prevValue) => prevValue - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else{
            history.push('/live')
            liver.click();
            // console.log("Done");
            
        }
    }, [value]);

    return (
        <>
            <Navbar />
            <div className="live">
                {/* <iframe src="https://nutflixx.chaturbate.com" frameborder="0"></iframe> */}
                <div className="redirect">
                    Redirecting to <a id='liver' href="https://nutflixx.chatrubate.com" style={{color:"var(--main-color)", fontWeight:"850"}}> NutFlixx Live Cams </a>in <span id="tm"> {value} </span> seconds.
                </div>
            </div>
        </>
    )
}

export default Live