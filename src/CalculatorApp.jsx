import React from "react";
import "./index.css";
import {add, sub, div, mult } from "./Calculator"

function App() {
  return (
    <>
     <h1 className="text-5xl font-bold text-blue-400 text-center bg-slate-300">Hello Tailwind!</h1>
      <ul className="text-center font-medium text-orange-300">
        <li>Sum of two no is : {add(40 , 4)}</li>
        <li>Sub of two no is : {sub(40 , 25)}</li>
        <li>Div of two no is : {div(40 , 3)}</li>
        <li>Mult of two no is : {mult(40 , 4)}</li>
     </ul> 
    </>
  );
}
export default App;