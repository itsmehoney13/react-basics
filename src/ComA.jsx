import React, { createContext } from "react";
import ComB from "./ComB";

const firstName = createContext();
const lastName = createContext();

const App = () => {
    return ( 
        <>
          <firstName.Provider value = {"Honey"}>
               <lastName.Provider value={"verma"}>
                    <ComB/>
               </lastName.Provider>
          </firstName.Provider>
        </>
    );
}
export default App;
export {firstName, lastName};