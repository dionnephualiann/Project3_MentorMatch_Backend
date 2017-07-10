// Collection of bodies
import React, {PropTypes} from 'react';
import { Button, Row, Col} from 'react-bootstrap';
import EventBody from './eventsBody';

// class version is required only if you need state. The only
// time you need state is if there is a visual state that is not tied to a model.
// for example a check box.
// map is iterating through the object's properties.




export const EventList = ({events}) => (

<div>
 {events.map( (eventBody, index) => {
   return (
     <EventBody key={index} {...eventBody} />
     

   )
 }

)}
</div>
);


export default EventList;
