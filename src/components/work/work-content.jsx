import React from 'react'

import WorkImage from './work-image.jsx'
import WorkVideo from './work-video.jsx'
import WorkInfo from './work-info.jsx'

import 'sass/components/cover-image.scss'

class WorkContent extends React.Component {

    renderWorkImage() {
        let coverImageUrl = this.props.work.medias[0].images[0].cover_image.url;
        let coverImageAlt = this.props.work.medias[0].images[0].cover_image.title;

        return (
            <div className={`cover-image`}>
                <div className="image-container">
                    <WorkImage imageUrl={coverImageUrl} alt={coverImageAlt} />
                </div>
            </div>
        )
    }

    renderContentImages() {
        let contentImages = this.props.work.medias[0].images[0].content_images;

        return (
            contentImages.map((image, index) => {
                return (
                    <div className="cover-image">
                        <div className="image-container">
                            <WorkImage imageUrl={image.url} alt={image.title} key={index} />
                        </div>
                    </div>
                );
            })
        );
    }

    renderContentVideo() {
        let contentVideo = this.props.work.medias[0].video;

        if (contentVideo) {

            return (
                <div className="cover-video">
                    <div className="video-container">
                        <WorkVideo videoUrl={contentVideo.url} title={contentVideo.title} />
                    </div>
                </div>
            );
        }

        return null;

    }

    renderWorkInfo() {
        let workInfo = this.props.work;
        return (
            <WorkInfo workInfo={workInfo} />
        );
    }

    render() {

        return (
            <div className="work-content">
                {this.renderWorkImage()}
                {this.renderWorkInfo()}
                {this.renderContentImages()}
                {this.renderContentVideo()}
            </div>
        );
    }
}

export default WorkContent
