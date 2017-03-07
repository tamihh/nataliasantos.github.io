
import React from 'react'

import 'sass/layout/work.scss'


class WorkImage extends React.Component {

  render() {

    return ( 
        <img className="image-container" src={this.props.imageUrl} alt={this.props.alt} />
    );
  }
}

export default WorkImage
