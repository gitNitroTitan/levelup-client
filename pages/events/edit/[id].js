import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleEvent } from '../../../utils/data/eventData';
import EventForm from '../../../components/event/EventForm';

export default function EditEvent() {
  const [editEvent, setEditEvent] = useState([]);
  const router = useRouter();
  // TODO: grab the id
  const { id } = router.query;

  // TODO: make a call to the API to get the game data
  useEffect(() => {
    getSingleEvent(id).then(setEditEvent);
  }, [id]);

  // TODO: pass object to form
  return (<EventForm obj={editEvent} />);
}
