import React from 'react';
// import users from './users'


const View = ( { id, name, username, email, phone, website } ) => {

    return (
    
         <div className="bg-light-light dib br3 pa3 ma2 grow bw2 shadow-5">  
                <div>
                    <h2>USER DETAILS</h2>
                   <p>ID: { id } </p>
                   <p> Nane: { name } </p>
                   <p> Username: { username } </p>
                   <p> Email: { email } </p>
                   <p> Phone: { phone } </p>
                   <p> Website: { website } </p>
                 
                </div>  
           </div>
         
    );
}
export default View;