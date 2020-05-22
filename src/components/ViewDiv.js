import React from 'react';

const ViewDiv = ( { id, name, username, email, phone, address, website } ) => {

    return (
    
         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">  
                <div>
                   <p> { id } </p>
                    <h2>{ name } </h2>
                   <p> Username: { username } </p>
                   <p> Email: { email } </p>
                   <p> Phone: { phone } </p>
                   <p> City: { address } </p>
                   <p> Website: { website } </p>
                 
                </div>  
           </div>
         
    );
}
export default ViewDiv;