import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router'
import works from '../work-data.json'
import WorkImage from './work/work-image.jsx'

import '../sass/layout/home.scss'
import '../sass/components/work-list.scss'
import '../sass/helpers/animations.scss'
import 'sass/components/cover-image.scss'

class Home extends React.Component {

  constructor() {
    super();

    this.state = {
      isHovering: false,
      currentOver: ''
    }
  }

  handleMouseOver(currentOver) {
    let hoverStatus = currentOver.length > 0 ? true : false;

    this.setState({
      isHovering: hoverStatus,
      currentOver: currentOver
    });
  }


  filterWorkById(work) {
    let currentOver = this.state.currentOver;

    if (work.work_id === currentOver)
      return work;

    return null;
  }

  renderCoverImage() {
    if (this.state.isHovering) {

      let work = works.filter(this.filterWorkById.bind(this));
      let imageUrl = work[0].medias[0].images[0].cover_image.url;

      return (
        <WorkImage imageUrl={imageUrl} key={work[0].id} />
      );
    }

    return null;
  }

  render() {
    let coverImageClass = this.state.isHovering ? 'is-active' : '';

    return (
      <section id="home">

        <div className={`cover-image ${coverImageClass}`}>
          <div className="image-container">
              <ReactCSSTransitionGroup
                transitionName='fadein'
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                {this.renderCoverImage()}
              </ReactCSSTransitionGroup>
          </div>
        </div>

        <div className="work-list-container">
          <ul className="work-list">
            <li
              className="work-list-item"
              ref="tnt-energy"
              onMouseOver={this.handleMouseOver.bind(this, "tnt-energy")}
              onMouseOut={this.handleMouseOver.bind(this)}>
              <Link to="/works/tnt-energy" className="work-list-item-link">TNT Energy</Link>
            </li>
            <li
              className="work-list-item"
              ref="itaipava"
              onMouseOver={this.handleMouseOver.bind(this, "itaipava")}
              onMouseOut={this.handleMouseOver.bind(this)}>
              <Link to="/works/itaipava" className="work-list-item-link">Itaipava</Link>
            </li>
            <li
              className="work-list-item"
              ref="o-boticario"
              onMouseOver={this.handleMouseOver.bind(this, "o-boticario")}
              onMouseOut={this.handleMouseOver.bind(this)}>
              <Link to="/works/o-boticario" className="work-list-item-link">O Boticario</Link>
            </li>
            <li
              className="work-list-item"
              ref="lg"
              onMouseOver={this.handleMouseOver.bind(this, "lg")}>
              <Link to="/works/lg" className="work-list-item-link">LG</Link>
            </li>
            <li
              className="work-list-item"
              ref="airwick"
              onMouseOver={this.handleMouseOver.bind(this, "airwick")}
              onMouseOut={this.handleMouseOver.bind(this)}>
              <Link to="/works/airwick" className="work-list-item-link">Air Wick</Link>
            </li>
            <li
              className="work-list-item"
              ref="crystal"
              onMouseOver={this.handleMouseOver.bind(this, "crystal")}
              onMouseOut={this.handleMouseOver.bind(this)}>
              <Link to="/works/crystal" className="work-list-item-link">Crystal</Link>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Home
