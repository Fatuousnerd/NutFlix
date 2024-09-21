import './about.scss';
import Navbar from '../navbar/Navbar';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="wrapper">
                    <div className="left">
                        <img src="./Media/red-bikini-ig-july-2020-v0-e45qyeivq4nc1.webp" alt="" />
                    </div>

                    <div className="right">
                        <div className="text">
                            <h1 className="heading">
                                NUTFLIXX
                            </h1>
                            <h1 className="sub">
                            HD Exclusive Content Anytime, Anywhere.
                            </h1>
                            <p className="desc" autoFocus>
                                Nutflixx is a global platform that offers a vast collection of adult videos,
                                exclusive content,
                                and live performances across various categories.
                                Launched to provide premium NSFW entertainment,
                                it has evolved into a leading on-demand service available to users worldwide.
                                Nutflixx produces unique,
                                high-quality original content,
                                making it a major player in the adult entertainment industry.
                                The platform allows users to stream content on multiple devices,
                                offering personalized recommendations based on viewing preferences for an immersive,
                                tailored experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About