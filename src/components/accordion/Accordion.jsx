import './accordion.scss';
import Content from "./Content";
import { useState } from 'react';

const Accordion = () => {
    // const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <>
            <div className="accordion">
                <Content/>
            </div>
        </>
    )
}

export default Accordion