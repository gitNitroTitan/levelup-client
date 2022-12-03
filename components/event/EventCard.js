import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { deleteEvent } from '../../utils/data/eventData';

const EventCard = ({ eventObj }) => {
  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventObj.description}?`)) {
      deleteEvent(eventObj.id).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{eventObj.description}</Card.Header>
      <Card.Body>
        <Card.Title>On: {eventObj.date}</Card.Title>
        <Card.Text>@: {eventObj.time}</Card.Text>
        <Button variant="danger" onClick={deleteThisEvent} className="m-2">
          DELETE
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Django sucks</Card.Footer>
    </Card>
  );
};

EventCard.propTypes = {
  eventObj: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default EventCard;
