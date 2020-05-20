import React from 'react';
import ViewDiv from './ViewDiv';

const ViewList = ({ users }) => {
    return (
        <div>
        {
        users.map((user, i) => {
            return  (
                <ViewDiv
                    key={i} 
                    id={users[i].id} 
                    name={users[i].name}
                    username={users[i].username} 
                    email={users[i].email}
                    phone={users[i].phone} 
                    address={users[i].address.city}
                    website={users[i].website}

            /> 
            );
            })     
        }
    </div> 

    );
}

export default ViewList;