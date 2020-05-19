import React from 'react';
import users from './users'


const View = ({id, name, email}) => {
    return (
        
        <div className='container'>
            {/* view card */}
           <div className="row text-center">
                <div className="col-md-4">
                     <div className="card cd ">
                    <div className="card-body">
                       <h4 className="card-title">Multi Point Inpection </h4>
                    <p className="card-text"> We carry out multi point inpection of cars to access engine prowess. 
                        Our engineers are trusted and have several years of industrial experience in the auto industry  </p>  
                  </div>
                </div>
              </div>
           </div>
        </div>  
    );
}
export default View;