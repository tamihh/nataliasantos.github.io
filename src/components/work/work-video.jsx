
import React from 'react'

import 'sass/layout/work.scss'


class WorkVideo extends React.Component {

  render() {

    return (
      <video width="100%" height="auto" controls>
        <source src={this.props.videoUrl} type="video/mp4" />
        <source src={this.props.videoUrl} type="video/ogg" />
      </video>
    );
  }
}

export default WorkVideo
