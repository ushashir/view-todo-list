import React from 'react';
import ReactDOM from 'react-dom';
// import View from './components/View';
import ViewList from './components/ViewList';
// import App from './App';
import 'tachyons';
import { users } from './components/users';


ReactDOM.render(
  <div>
    <ViewList users={users} />
   
  </div>,

  document.getElementById('root')
);

