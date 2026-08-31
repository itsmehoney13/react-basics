import React from 'react'

const CardB = () => {

// function ncard(val){     // function to return the Card component for each element in the Cdata array
//   return (
//     <Card 
//      imgsrc={val.imgsrc}     
//      sname={val.sname}
//      title={val.title}
//      link={val.link}
//     />
//   );
// }

    return (
      <>
        <h1 className="heading__style">List of top 5 Netflix Series in 2026</h1>
    
         {Cdata.map((val) => {          // map function is used to iterate over the Sdata array and return a new array of Card components
           return (
             <Card                      // returning the Card component for each element in the Sdata array
               key={val.id}             // each chid in a list should have a unique "key" prop.
               imgsrc={val.imgsrc}     // passing the imgsrc prop to the Card component
               sname={val.sname}
               title={val.title}
               link={val.link}
             />
           );
         })}
      </>
    );
}
export default CardB;