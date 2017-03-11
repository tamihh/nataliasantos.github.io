import React from 'react'

const videoButton = (props) => {

    return (
      <div id="play" className="play-button" onClick={ () => props.handleClick()}>
        <i className={`btn-icon fa fa-play ${props.btnIconClass}`} aria-hidden="true"></i>
      </div>
    );
  }

export default videoButton
