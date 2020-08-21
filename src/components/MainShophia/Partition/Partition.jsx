import React from 'react';

const Partition = ({text}) => {
   return (
      <div className="container">
         <div className="partition">
            <div className="partition__line"></div>
            <h3 className="partition__title">{text}</h3>
            <div className="partition__line"></div>
         </div>
      </div>
   );
}

export default Partition;
