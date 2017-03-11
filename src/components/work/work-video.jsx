
import React from 'react'

import 'sass/components/cover-video.scss'

class WorkVideo extends React.Component {

  constructor() {
    super();

    this.state = {
      btnIconClass: 'is-visible'
    }

    this.handleVideoEnded = this.handleVideoEnded.bind(this);

  }

  vidplay() {
    let video = this.refs.workVideo;
    let button = this.refs.playButton;

    if (video.paused) {
      video.play();

      this.setState({
        btnIconClass: ''
      }); 

    } else {
      video.pause();

      this.setState({
        btnIconClass: 'is-visible'
      }); 

    }

  }

  handleVideoEnded() { 
    this.setState({
      btnIconClass: 'is-visible'
    }); 
  }

  componentDidMount() {
      this.refs.workVideo.addEventListener('ended', this.handleVideoEnded,false);
  }


  render() {
    let btnIconClass = this.state.btnIconClass;
    let {title, url, poster} = this.props.contentVideo;

    return (
      <div className="video-container">
        <video id="workVideo" width="100%" height="auto" controls poster={poster} ref="workVideo">
          <source src={url} type="video/mp4" />
          <source src={url} type="video/ogg" />
        </video>

        <div 
          id="play" 
          ref="playButton"
          className="play-button" 
          onClick={ () => this.vidplay()}>
          <i className={`btn-icon fa fa-play ${btnIconClass}`} aria-hidden="true"></i>
        </div> 
               
      </div>
    );
  }
}

export default WorkVideo
