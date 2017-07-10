// event body is an individual post
import React, {PropTypes} from 'react';
import { Button, Row, Col, Panel, Grid } from 'react-bootstrap';

import './eventsBody.css'


const EventBody = (props) => (

  <div>
  <Col md={10} mdOffset={1} id="Body">
  <Panel header={props.title}>

      <Row>
      <Col md={12}>
      {props.text}
      </Col>
      </Row>
      <Row>
        <Col md={1} className="Date">
        {props.date.toLocaleDateString()}
        </Col>
        <Col md={2} className="pull-right Time">
        {props.date.toLocaleTimeString()}
        </Col>
      </Row>

  </Panel>
  </Col>
  </div>
);

export default EventBody;
