//event post is "create" a post with the button
import React, {PropTypes, Component} from 'react';
import { Button, FormGroup, InputGroup, ControlLabel, FormControl, Glyphicon, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {createPost} from './Action/eventsAction';

import './eventPost.css';

function FieldGroup({ id, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormControl {...props} />
    </FormGroup>
  );
}

export class EventPost extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      text: ""
    }
  }

  onChange = (e) => {
    let text = e.target.value;
    this.setState({text})
  }

  onClick = (e) => {
    console.log(e)
    this.props.createPost(this.state.text);
    this.setState({
      text: ''
    });
  }

render() {
  return (
  <Row className="show-grid">

    <Col md={10} mdOffset={1} id="Post">
      <form>
        <FormGroup>
          <InputGroup>
            <FormControl type="text"
                         placeholder="Your Post of the Day"
                         onChange={this.onChange}
                         value={this.state.text}/>
            <InputGroup.Button>
            <Button><Glyphicon glyph="camera"/></Button>
            <Button bsStyle="primary"
                    onClick={this.onClick}
                    >Submit</Button>
            </InputGroup.Button>
          </InputGroup>
      </FormGroup>


          <FieldGroup
          id="formControlsFile"
          type="file"
        />

    </form>
  </Col>
</Row>
);
}
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (text) => { dispatch(createPost(text)); },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventPost);
