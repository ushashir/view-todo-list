import React, { Component } from 'react';
import ViewList from './components/ViewList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
// import Login from './components/Login'


class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [], 
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({users: users}));
    }
    
    onsearchChange=(event)=> {
        this.setState({searchField: event.target.value})
    }
    
    render () {
        const filteredUsers=this.state.users.filter(users=>{
            return users.name.toLowerCase().includes(this.state.searchField.toLowerCase())
           
        })
        if (this.state.users.lenght === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <img alt="logo" src={ require('./logo.png') } />
                    <h1>SEARCH TODO LIST APP</h1>
                    <SearchBox searchChange={this.onsearchChange}/>
                    <Scroll>
                        <ViewList users={filteredUsers}/>
                    </Scroll>
                </div>
            )
        }  
    }
}

        

export default App;
