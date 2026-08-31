import React, { useState, useEffect } from "react";

const Sresult = (props) => {
  
  const [photos, setPhotos] = useState([]);
  const KEY = "pxSyDsnFlVMIhJ4Km3Z6yzVQ_a1Ntpzt4ZzgO5W-6Oo";

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${props.name}&client_id=${KEY}&per_page=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPhotos(data.results);
      }); 
  }, [props.name]);

  return (
   <>
      {photos[0] && <img src={photos[0].urls.small} alt="" style={{width:"380px", height:"280px", margin:"10px"}} /> }
   </>
  );
};
export default Sresult;




// Live search app for random images

//import react from "react";
// const Sresult = (props) => {
//     const img =  `https://picsum.photos/400/300?random=${props.name}`;

//     return(
//        <>
//         <div>
//           <img src={img} alt="search" />
//         </div>
//        </>
//     );
// }
// export default Sresult;