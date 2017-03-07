import React from 'react'

import 'sass/components/work-info.scss'


class WorkInfo extends React.Component {

  renderRoleInfo() {
    let workInfo = this.props.workInfo;

    let roles = workInfo.role.map( (role) => {
      return role;
    });

    if (roles.length > 1)
      return roles.join(', ');
    
    return roles;

  }

  renderDescription() {

    if (this.props.workInfo.description)
      return (
        <div className="work-description-text">
            <p>{this.props.workInfo.description}</p>
        </div>
      );
    
    return null;
  }

  render() {
    let workInfo = this.props.workInfo;


    return (    
        <div className="work-description wrapper">
          <ul className="work-description-info">
            <li className="work-description-info-item">Agency: {workInfo.agency}</li>
            <li className="work-description-info-item">Client: {workInfo.work_title}</li>
            <li className="work-description-info-item">Role: {this.renderRoleInfo()}</li>
          </ul>
          {this.renderDescription()}
        </div>
    );
  }
}

export default WorkInfo
