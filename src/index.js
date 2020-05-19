import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import View from './components/View'
// import App from './App';
import 'tachyons';
import { users } from './components/users';


ReactDOM.render(
  <div>
    <View id={users[0].id} name={users[0].name} username={users[0].username} email={users[0].email} phone={users[0].phone} website={users[0].website} />
    <View id={users[1].id} name={users[1].name} username={users[1].username} email={users[1].email} phone={users[1].phone} website={users[1].website} />
    <View id={users[2].id} name={users[2].name} username={users[2].username} email={users[2].email} phone={users[2].phone} website={users[2].website} />
   
  </div>,

  document.getElementById('root')
);

