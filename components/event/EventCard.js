import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
// import { useAuth } from '../../utils/context/authContext';
import { deleteEvent } from '../../utils/data/eventData';

const EventCard = ({ eventObj }) => {
  // const { user } = useAuth();
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
        <Link href={`/events/edit/${eventObj.id}`} passHref>
          <Button variant="info">
            EDIT
          </Button>
        </Link>
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
    game: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      maker: PropTypes.string,
      number_of_players: PropTypes.number,
      skill_level: PropTypes.number,
    }).isRequired,
    organizer: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string,
      bio: PropTypes.string,
    }).isRequired,
    id: PropTypes.number,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
