// event page contains all Lists, Body and Post
import React, {PropTypes} from 'react';
import EventPost from "./eventPost";
import EventList from "./eventsList";
import {connect} from 'react-redux';


const EventPage = (props) => (
<div>
  <EventPost />
  <EventList events={props.events || []}/>
</div>
);

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(EventPage);
