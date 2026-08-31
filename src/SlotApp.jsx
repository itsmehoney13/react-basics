import React from "react";

const SlotM = (props) => {
//   let x = props.x;
//   let y = props.y;
//   let z = props.z;

let {x, y, z} = props;   //object destructuring

   if ( (x===y) && (y===z) ) {
       return(
           <>
              <div className="slot_inner">
                 <h1> {x} {y} {z} </h1>
                 <h2> This is Matching</h2>
                 <hr/>
              </div>
          </>
        );
   } else {
         return(
           <>
              <div className="slot_inner">
                 <h1> {x} {y} {z} </h1>
                 <h2> This is not Matching</h2>
                 <hr/>
              </div>
          </>
        );
    }
}

const App = () => {
    return(
        <>
            <h1 className="heading__style"> 
                Welcome to <span style={{ fontWeight: "bold" }}> slot machine game </span> 
            </h1>
            <div className="slotmachine">
               <SlotM x= "😊" y="😊" z="😊"/>
               <SlotM x= "😊" y="😂" z="😊"/>
               <SlotM x= "🍎" y="🍌" z="🍎"/>
               <SlotM x= "🎀" y="🎀" z="🎀"/>
            </div>   
       </>
    )
}
export default App;