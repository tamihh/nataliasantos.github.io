
import React from 'react'
import Footer from './footer/index.jsx'
import works from '../work-data.json'
import WorkContent from './work/work-content.jsx'

class PageWork extends React.Component {

  constructor() {
    super();
  }

  filterWorkByID(obj) {
    const { workId } = this.props.params;
    if (obj.work_id === workId)
      return obj;

    return null;

  }

  renderWorkContent() {

      let workData = works.filter(this.filterWorkByID.bind(this));

      return (
        <WorkContent work={workData[0]} />
      );

  }


  render() {

    return (
      <section id="work">
        {this.renderWorkContent()}
        <Footer />
      </section>
    );
  }
}

export default PageWork
