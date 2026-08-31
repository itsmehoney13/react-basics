import React, {useState} from "react";

const App = () => {     //fat arrow function.

   let newTime = new Date().toLocaleTimeString();

   const [ctime, setCtime] = useState(newTime);

   const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
   };

   setInterval(UpdateTime,1000);
   return(
    <>
      <h1>{ctime}</h1>   
      {/* <button onClick={UpdateTime}>Get time</button> */}    // if we want a button then we use this.
    </>
   ); 
}     
export default App;