import React, { Component } from 'react';
import { Button } from 'reactstrap';
const api_url = 'https://spotify-listen-along-backend.herokuapp.com/'; //'http://localhost:8080/';
//const api_url = 'http://localhost:8080/';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      url: ""
    };
  }
  componentWillMount() {
    fetch(api_url+'login')
      .then(response => {
        if (response.ok) {
          response.text().then((text)=>{ this.setState({url:text}, () => console.log("Got the URL!", text)) });
          /* return this.setState({url:response.text().then((text)=>{ return text })}); */
        } else {
          console.log("Couldn't get login URL", response);
        }
      });
  }

  render() {
    return (
      <Button color="primary" size="lg" block href={this.state.url}>
        Log in
      </Button>
    );
  }
}

export default Login;
