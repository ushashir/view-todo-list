
import React from 'react';
import ViewList from './components/ViewList';
import { users } from './components/users';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div >
      <h1 className="tc">VIEW TODO LIST APP</h1>
      <SearchBox />
      <ViewList users={users} />
    </div>
    
  );
}

export default App;