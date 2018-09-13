import React, { Component } from 'react';
import { Table } from 'reactstrap';
import AllPlayingUser from './AllPlayingUser';
const api_url = 'https://spotify-listen-along-backend.herokuapp.com/';
//const api_url = 'http://localhost:8080/';

class AllPlaying extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.interval = "";
  }

  getUsers() {
    fetch(api_url+'api/allplaying')
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  componentWillMount() {
    this.getUsers();
    this.interval = setInterval(() => this.getUsers(), 2500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let renderUsers = this.state.users.map(data =>{
      return(
        <AllPlayingUser key={data._id} userData={data.user} nowPlayingData={data.nowPlaying}/>
      );
    });
    return (
      <div>
        <h2>All Playing</h2>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Song</th>
              <th>Artists</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {renderUsers}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AllPlaying;
