import React, { Component } from "react";
import "./app.css";
import ReactImage from "./react.png";
import Button from '@material-ui/core/Button';
import AppBar from './AppBar'; 
import MediaCard from './MediaCard'; 

class Matbutton extends Component {
  handleClick() {
	alert('clicked!')
  }
  render () {
	return (
	  <Button variant="contained" color="primary" onClick={this.handleClick}>
		Material UI Button
	  </Button>
	);  
  }   
}

class App extends Component {
  constructor(props) {
	super(props);
	this.state = { username: null };
  }

  componentDidMount() {
	fetch("/api/getUsername")
	  .then(res => res.json())
	  .then(user => this.setState({ username: user.username }));
  }

  render() {
	return (
	  <div>
		<AppBar/>		
		{this.state.username ? (
		  <h1>Hello {this.state.username}</h1>
		) : (
		  <h1>Loading.. please wait!</h1>
		)}        
		<Matbutton/>
		<MediaCard/>
	  </div>      
	);
  }
}


export default App; 