import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        id:"",
        image_url:"",
        name:""
      },
      nowPlaying: {
        id:"",
        is_playing:"",
        name:"",
        progress_ms:"",
        time:"",
        artists:"",
        timestamp:""
      }
    };
  }
  componentDidMount() {
    this.updateState();
  }
  componentWillReceiveProps() {
    this.updateState();
  }
  updateState() {
    let user = this.props.userData;
    let nowPlaying = this.props.nowPlayingData;
    this.setState({
      user: user,
      nowPlaying: {
        id:nowPlaying.id,
        is_playing:nowPlaying.is_playing,
        name:nowPlaying.name,
        progress_ms:nowPlaying.progress_ms,
        time:nowPlaying.time,
        artists:nowPlaying.artists,
        timestamp: this.state.nowPlaying.is_playing ? this.calculateTimestamp(nowPlaying.time, nowPlaying.progress_ms) : this.milliesToMinutesAndSeconds(nowPlaying.progress_ms)
      }
    });
  }
  milliesToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  calculateTimestamp(time, progress) {
    /*setInterval(() => {
         let progress = this.state.nowPlaying.progress_ms +5100;
         let timestamp = this.milliesToMinutesAndSeconds(new Date().getTime() - time + progress);

         this.setState({nowPlaying:{
           timestamp:timestamp,
         }});
       }, 500);*/
      return this.milliesToMinutesAndSeconds(new Date().getTime() - time + progress);
  }

  render() {
    return (
      <tr>
        <td><img src={this.state.user.image_url} alt={this.state.user.name} width="25"/>&nbsp;
        {this.state.user.name}</td>
        <td>{this.state.nowPlaying.name}</td>
        <td>{this.state.nowPlaying.artists}</td>
        <td>{this.state.nowPlaying.timestamp}</td>
      </tr>
    );
  }
}

export default Login;
