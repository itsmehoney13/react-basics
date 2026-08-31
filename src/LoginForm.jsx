import React, {useState} from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });
    // const [lastname, setLastName] = useState("");
    
    // const [fullName, setFullName] = useState("");
    // const [fullName2, setFullName2] = useState("");

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value,name } = event.target;  //object desturcturing

        setFullName((preValue) => {
          //console.log(preValue);
            return {
              ...preValue,
              [name] : value
            };

          // if( name === "fName" ) {
          //   return {
          //     fname: value,
          //     lname: preValue.lname,
          //     email: preValue.email,
          //     phone: preValue.phone,
          //   };
          // }else if( name === "lName" ) {
          //   return {
          //     fname: preValue.fname,
          //     lname: value,
          //     email: preValue.email,
          //     phone: preValue.phone,
          //   };
          // }else if( name === "email" ) {
          //   return {
          //     fname: preValue.fname,
          //     lname: preValue.lname,
          //     email: value,
          //     phone: preValue.phone,
          //   };
          // }else if( name === "phone" ) {
          //   return {
          //     fname: preValue.fname,
          //     lname: preValue.lname,
          //     email: preValue.email,
          //     phone: value,
          //   };
          // }
        });

        // setName(event.target.value);
    };
    // const inputEventTwo = (event) => {
    //     setLastName(event.target.value);
    // }
    
    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted");
        // setFullName(name);
        // setFullName2(lastname);
    }; 
    return (
        <>
          <div className="main_div">
              <form onSubmit={onSubmits} >
                <div>
                    <h1> Hello {fullName.fname}{fullName.lname} </h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phone}</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name = "fname"
                      onChange={inputEvent}
                      value={fullName.fname}
                    />
                    <br/>
                    <input 
                      type="text"
                      placeholder="Enter your Last Name"
                      name = "lname"
                      onChange={inputEvent}
                      value={fullName.lname}
                    />
                    <br/>
                    <input 
                      type="email"
                      placeholder="Enter your email"
                      name = "email"
                      onChange={inputEvent}
                      value={fullName.email}
                      autoComplete="off"
                    />
                    <br/>
                    <input 
                      type="number"
                      placeholder="Enter your Mobile number"
                      name = "phone"
                      onChange={inputEvent}
                      value={fullName.phone}
                    />
                <button type="submit"> Submit me </button>
                </div>
              </form>
          </div>
        </>
    );
}
export default App;