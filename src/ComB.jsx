// useContext Hooks

import React, { useContext } from "react";
import ComC from "./ComC"
import {firstName, lastName} from "./ComA";

const ComB = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName); 

    return (
        <>
          <h1 className="text-center text-red-400 text-2xl">
              Hello pretty {fname} {lname} 
         </h1>
        </>
    );
}
export default ComB;