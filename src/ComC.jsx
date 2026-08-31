//Context API 

import React from "react";
import {firstName, lastName} from "./ComA";

const ComC = () => {
    return (
       <>
         <firstName.Consumer>
           {(fname) => {
               return (
                   <lastName.Consumer>
                        {(lname) => {
                            return (
                                <h1>
                                    Hello pretty {fname} {lname} 
                                </h1>
                            );
                        }}   
                   </lastName.Consumer>
                );
            }}
         </firstName.Consumer>
       </>
    );
}
export default ComC;