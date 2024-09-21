import './content.scss';
import Arr from "./Arr";
import { useState } from "react";



const Mp = ({ item }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);


    return (
        <>
            <button className={accordionOpen ? "closed" : "open"} onClick={() => setAccordionOpen(!accordionOpen)}>
                <span className='titl'>{item.title}</span>
                <span>+</span>
            </button>
            <div className='hld'>
                <p className={accordionOpen ? "active" : "inactive"}>{item.answer}</p>
            </div>
        </>
    )
}

const Content = () => {
    return (
        <>
            <div className="map">
                {Arr.map(item => (
                    <Mp item={item} key={item.id} />
                ))}
            </div>
        </>
    )
}

export default Content