
import React from 'react'

import 'sass/components/cover-image.scss'


class WorkCoverImage extends React.Component {


  render() {
    let workImage = this.props.work[0].medias[0].images[0].cover_image.url;
    let workImageId = this.props.work[0].medias[0].images[0].cover_image.id;

    return (    
        <div className="cover-image" key={workImageId}>
          <div className="image-container">
            <img src={workImage} alt="TNT Energy" />
          </div>
        </div>
    );
  }
}

export default WorkCoverImage
