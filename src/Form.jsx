import React, {useState} from "react";

const App = () => {

    const [name, setName] = useState();
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const onSubmit = () => {
        setFullName(name);
    };
    return (
       <>
          <div>
               <h1> Hello {fullName} </h1>
               <input
                  type ="text"
                  placeholder ="Enter your name"
                  value ={name}        // controlled component.(react state controls input)
                  onChange={inputEvent}
               />
               <button onClick={onSubmit}> click me 👆 </button>
          </div>    
       </>
    );
}
export default App; 