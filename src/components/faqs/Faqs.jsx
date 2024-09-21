import './faqs.scss';
import Navbar from '../navbar/Navbar';
import Accordion from '../accordion/Accordion';

const Faqs = () => {
    return (
        <>
            <Navbar />
            <div className="faqs">
                <div className="wrap">
                    <div className="left">
                        <img src="./Media/28711864_086_11c4.jpg" alt="" />
                    </div>

                    <div className="right">
                        <Accordion />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs