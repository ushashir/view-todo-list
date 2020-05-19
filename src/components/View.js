import React from 'react';
// import users from './users'


const View = ( props ) => {
    const { id, name, username, email, phone, website } = props;
    return (
    
         <div className="bg-light-light dib br3 pa3 ma2 grow bw2 shadow-5">  
                <div>
                    <h1>User Details</h1>
                   <p>{ id } </p>
                   <p>{ name } </p>
                   <p>{ username } </p>
                   <p>{ email } </p>
                   <p>{ phone } </p>
                   <p>{ website } </p>
                 
                </div>  
           </div>
         
    );
}
export default View;