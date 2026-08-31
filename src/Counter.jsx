import React,{ useState } from "react";

function App() {

    // const state = useState();
    const[ count, setCount ] = useState(0);    //array destructuring.

    function IncNum() {
        setCount (count + 1);
    };

    return(
        <>
         <h1>{count}</h1>
         <button onClick={IncNum}>click me</button>
        </>
    );
}
export default App;