import React, {PropTypes, Component} from 'react';
import { Button, Grid, Row, Col, Clearfix, Image, Well} from 'react-bootstrap';
import {connect} from 'react-redux';

import './profile.css'

export class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {show: false};
}

render(){

return (
  <Grid>
      <Row className="show-grid">
        <Col sm={12} md={6}>
          <Image src={this.props.profile.url} circle />
            <Well bsSize="large" className="JobTitle">
              <h1>{this.props.profile.jobTitle}</h1>
              <Button bsStyle="info"
                      className="pull-right editTitle"
                      onClick={this.onClick}>Edit</Button>
            </Well>
              <div className="Description">
              <Well bsSize="large" className="About">
                <div>{this.props.profile.jobDescription}
                </div>
                    <Button bsStyle="info"
                            className="pull-right editDescription"
                            onClick={this.onClick}>Edit</Button>
              </Well>

              </div>

        </Col>

        <Col sm={12} md={6}>
          <div className="SkillSet">
            <Well bsSize="large" className="Skillset">
              <div>{this.props.profile.skillset}
              </div>
              <Button bsStyle="info"
                      className="pull-right editSkill"
                      onClick={this.onClick}>Edit</Button>
            </Well>
          </div>
        </Col>
      </Row>
    </Grid>
      )
    };
  }

// A higher order component is when you do a {connect}: a higher-order component is a function that takes a // component and returns a new component.

const mapStateToProps = (state) => {
    return state.profile;
}

export default connect(mapStateToProps)(Profile);
