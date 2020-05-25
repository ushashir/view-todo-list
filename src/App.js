import React, { Component } from 'react';
import ViewList from './components/ViewList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Navigation from './components/Navigation';
import Login from './components/Login';
        
const initialState = {
    route: "login",
    isLogin: false,
    users: [],
    searchField: '',
    // user: {
    //     id: "",
    //     name: "",
    //     password: "",    
    // },
}

class App extends Component {
    constructor() {
        super()
        this.state = initialState;
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({users: users}));
    }

    // Routes
    onRouteChange = ( route ) => {
        this.setState({route: route});
    }
        

    onsearchChange=(event)=> {
        this.setState({searchField: event.target.value})
    }
    
    render () {

        const filteredUsers=this.state.users.filter(users=>{
            return users.name.toLowerCase().includes(this.state.searchField.toLowerCase())
           
        })
        if (this.state.users.length === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    {/* <img alt="logo" src={ require('./logo.png') } /> */}
                    <Navigation onRouteChange = {this.onRouteChange} />
                    <h1>SEARCH TODO LIST APP</h1>
                    
                    {this.state.route === 'login' 
                    ? <Login onRouteChange = {this.onRouteChange} /> 
                    :
                    <div> 
                        <SearchBox searchChange={this.onsearchChange}/>
                        <Scroll>
                            <ViewList users={filteredUsers}/>
                        </Scroll>
                    </div>
                    }
                        
                </div>
            )
        }  
    }
}

        

export default App;
