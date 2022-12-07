import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { deleteEvent } from '../../utils/data/eventData';

function EventCard({ eventObj, onUpdate }) {
  const deleteSingleEvent = () => {
    if (window.confirm(`Delete ${eventObj.description}?`)) {
      deleteEvent(eventObj.id).then(() => onUpdate());
    }
  };

  // const leaveTheEvent = () => {
  //   leaveEvent(id, { user_id: user.uid }).then(() => onUpdate());
  // };

  // const joinTheEvent = () => {
  //   joinEvent(id, { user_id: user.uid }).then(() => onUpdate());
  // };

  return (
    <Card className="text-center">
      <Card.Header>{eventObj.description}</Card.Header>
      <Card.Body>
        <Card.Title>On: {eventObj.date}</Card.Title>
        <Card.Text>@: {eventObj.time}</Card.Text>
        {/* {joined ? (
          <Button
            variant="warning"
            onClick={leaveTheEvent}
          >
            Leave
          </Button>
        ) : (
          <Button
            onClick={joinTheEvent}
          >
            SIGN UP
          </Button>
        )} */}
        <Link href={`/events/edit/${eventObj.id}`} passHref>
          <Button variant="info">
            EDIT
          </Button>
        </Link>
        <Button variant="danger" onClick={deleteSingleEvent} className="m-2">
          DELETE
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Django sucks</Card.Footer>
    </Card>
  );
}
EventCard.propTypes = {
  eventObj: PropTypes.shape({
    id: PropTypes.number,
    game: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      maker: PropTypes.string,
      gamer: PropTypes.number,
      number_of_player: PropTypes.number,
      skill_level: PropTypes.number,
    }).isRequired,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    organizer: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string,
      bio: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;
