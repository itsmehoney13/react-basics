import React from "react";
import "./Attribute.css";

function App() {
  const name = "Honey";
  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/250/300";
  const img3 = "https://picsum.photos/300/300";
  const links = "https://www.youtube.com/";


  return (
    <>
      <h1 className = "heading">My name is {name}</h1>
      <div className = "img_div">
        <img src = {img1} alt = "randomImages" />
        <img src = {img2} alt = "randomImages" />
        <a href = {links} target = "_blank">
          <img src = {img3} alt = "randomImages" />
        </a>
      </div>
    </>
  );
}
export default App;