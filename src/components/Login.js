import React, { Component } from 'react';
import { Button } from 'reactstrap';
const api_url = 'https://spotify-listen-along-backend.herokuapp.com/';
//const api_url = 'http://localhost:8080/';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      url: api_url+'login'
    };
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
