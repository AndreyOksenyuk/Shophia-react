import React from 'react';
import { useSelector } from 'react-redux';

const Brend = () => {
   let images = useSelector(state => state.app.brendImg)
   return (
      <div className="container">
         <div className="brand">
         {
            images.map(img => {
               return <div key={img}><img src={img} alt="brand" /></div>
            })
         }
         </div>
      </div>
   );
}

export default Brend;
