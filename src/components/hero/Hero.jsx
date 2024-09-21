import './hero.scss';
import Carousel from "./carousel/Carousel";
import Navbar from '../navbar/Navbar';
import Verif from '../verif/Verif';

const Hero = () => {
  return (
    <>
      <Verif />
      <Navbar />
      <div className="hero">
        <div className="wrapper">
          <div className="imageHolder">
            {/* <img src="./wallpaper1.jfif" alt="" /> */}
            <Carousel />
          </div>

          <div className="holder">
            <h3>Nutflixx</h3>
            <h1>
              Ready for More?
              Unlock Private Galleries and 
              Custom Videos by Joining Now!
            </h1>
            <a href="/live">
              <button>Get More</button>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero