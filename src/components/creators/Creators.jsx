import './creators.scss';
import Navbar from '../navbar/Navbar';
import List from "./list/List";
import Coming from '../coming/Coming';

const Creators = () => {
  return (
    <>
      <Navbar />
      <Coming/>
      {/* <div className="wrapper">
        <div className="text">
          <h1 className="heading">
             Hot Creators & Models 
            Explore Models & Order Custom Content Today!
          </h1>
          <p className="sub">
            Browse the models below and order your custom content today for a truly personalized experience!
          </p>
        </div>

        <div className="show">
          <List />
        </div>
      </div> */}
    </>
  )
}

export default Creators