import "./carousel.scss";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        id: 1,
        image: "./Media/89986954_014_a1c0.jpg",
    },
    {
        id: 2,
        image: "./Media/top-2-bikinis-red-or-black-v0-1csmd0dmzmgc1.webp",
    },
    {
        id: 3,
        image: "./Media/hot-tub-time-in-red-bikini-ig-may-2018-v0-kph3t9tt6d8d1.webp",
    },
    {
        id: 4,
        image: "./Media/top-2-bikinis-red-or-black-v0-a7o6zzcmzmgc1.webp",
    },
    {
        id: 5,
        image: "./Media/red-bikini-v0-xkrlxo1kvgkd1.webp",
    },
];

const Single = ({ item }) => {
    const ref = useRef()

    return (
        <div className="content">
            <img src={item.image} alt="" />
        </div>
    )
}

const Reviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        fade: true,
        // cssEase: "linear"
    }

    return (
        <div className="carousel">
            <div className="contentHolder">
                <Slider {...settings}>
                    {content.map(item => (
                        <Single item={item} key={item.id} />
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default Reviews