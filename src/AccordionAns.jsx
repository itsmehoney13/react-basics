import React, {useState} from "react";

const MyAccordion = ({questions, answer}) => {

    const [show, setShow] = useState(false);
    
    return (
        <>
          <div className="main_heading">
              <p onClick={() => setShow(!show)}> {show? "➖" : "➕"}</p>
              <h3>{questions}</h3>
          </div>
          
          {show && <p className="answers">{answer}</p>} 
        </>
    );
}
export default MyAccordion; 