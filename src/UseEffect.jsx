import React,{useState,useEffect} from "react";

const App = () => {

    const [num , setNum] = useState(0); 
    const [nums , setNums] = useState(0); 

    useEffect(() => {
        // alert("i am clicked");
        console.log("useEffect runs")
        document.title = `you clicked me ${nums} times`;
    },[nums]);

    return (
       <>
           <button
              onClick={() => {setNum(num + 1)}}> Click me {num} 
           </button>
           <br/><br/>
           <button
              onClick={() => {setNums(nums + 1)}}> Click me {nums} 
           </button>
       </>
    );
}
export default App;