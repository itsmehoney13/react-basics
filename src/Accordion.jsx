import React, {useState} from "react";
import {questions} from "./AccordionAPI";
import "./Accordion.css";
import AccordionAns from "./AccordionAns";
 
const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section className="main_div">
            <h1> React Interview Questions </h1>
            {
                data.map((curElemt) => {
                    const {id} = curElemt;
                    return <AccordionAns key={id} {...curElemt} />;
                })
            }
            </section>
        </>
    )
}
export default Accordion;