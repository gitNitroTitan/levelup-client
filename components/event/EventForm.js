import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createEvent, updateEvent } from '../../utils/data/eventData';
import { getGames } from '../../utils/data/gameData';

const EventForm = ({ user, obj }) => {
  const [games, setGames] = useState([]);
  const initialState = {
    description: '',
    date: '',
    time: '',
    game: 0,
  };
  const [currentEvent, setCurrentEvent] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    // TODO: Get the game types, then set the state
    getGames().then(setGames);
    if (obj) {
      // const editEvent = {
      //   game: obj.id,
      //   time: obj.time,
      //   date: obj.date,
      //   description: obj.description,
      // };
      setCurrentEvent(obj);
    }
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      game: Number(currentEvent.game),
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      organizer: user.uid,
    };
    if (obj) {
      updateEvent(currentEvent, obj.id).then(() => router.push('/events'));
    } else {
      createEvent(event).then(() => router.push('/events'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" required value={currentEvent.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control name="date" required value={currentEvent.date} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control name="time" required value={currentEvent.time} onChange={handleChange} />
        </Form.Group>
        {/* <Form.Group className="mb-3"> */}
        {/* <Form.Label>Organizer</Form.Label>
          <Form.Control name="organizer" required value={currentEvent.organizer} onChange={handleChange} />
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Select name="game" onChange={handleChange}>
            <option value="">Select a Game</option>
            {
            games?.map((game) => (
              <option
                key={game.id}
                value={game.id}
                defaultValue={currentEvent.game === game.id}
              >
                {game.title}
              </option>
            ))
          }
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          {obj?.id ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </>
  );
};

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  obj: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    game: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
    organizer: PropTypes.shape({
      id: PropTypes.number,
      uid: PropTypes.string,
    }),
  }).isRequired,
};

export default EventForm;
