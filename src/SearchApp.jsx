import React, { useState } from "react";
import Sresult from "./SearchResult";

const App = () => {
    const [num, setNum] = useState("");

    const inputEvent = (event) => {
        const data = event.target.value;
        console.log(data);
        setNum(data);
    }
    return (
       <>
          <h1>Live Image Search</h1>
          <div className="searchbar">
            <input type="text" 
              placeholder="Search Anything"
              value={num}
              onChange={inputEvent}
            />
            {num === "" ? null : <Sresult name = {num} />}
          </div> 
       </>
    );
}
export default App;