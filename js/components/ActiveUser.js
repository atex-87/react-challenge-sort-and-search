import React, { Component } from 'react';
const ActiveUser = ({data, activeIndex}) => {
     if (!data || !data[activeIndex]) { return <p></p>; }
    let activeItem = data[activeIndex];
    return(
        
       <div className="thumbnail">    
           <img src={`images/${activeItem.image}.svg`} />
           <div className="thumbnail-caption">
               <h3>{activeItem.name}</h3>
               <table className="user-info table table-responsive">
                   <tbody>
                    <tr> 
                        <td>Age:</td>
                        <td>{activeItem.age}</td>
                    </tr> 
                    <tr> 
                        <td>Favorite animal:</td>
                        <td>{activeItem.image}</td>
                    </tr> 
                    <tr> 
                        <td>Phone:</td>
                        <td>{`8 ${activeItem.phone}`}</td>
                    </tr> 
                    </tbody>
               </table>
               <p>
                   <b>Favorite phrase: </b>{activeItem.phrase}
               </p>
           </div>
        </div>
    )
}
export default ActiveUser; 