import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersToDoList from './components/UsersToDo.js'
import Menu from './components/Menu.js'
import Footer from './components/Footer.js'
import axios from 'axios'

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'users': []
       }
      }

      componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then(response => {
                const users = response.data
                    this.setState(
                    {    
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
      }
 
    render () { 
        return (
            <div>
                <Menu menu/>
                <Footer footer/>
                <UsersToDoList users={this.state.users} />
            </div>
        )
    }
 }
 
   
   export default App;
