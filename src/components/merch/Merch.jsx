import './merch.scss';
import Navbar from '../navbar/Navbar';

const Merch = () => {
  return (
    <>
      <Navbar />
      <div className="merch">
        <iframe src="https://nutflixx.printify.me/products" frameborder="0"></iframe>
      </div>
    </>
  )
}

export default Merch