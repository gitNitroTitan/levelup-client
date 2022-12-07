import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import { getSingleEvent, getEvents } from '../../../utils/data/eventData';
import EventForm from '../../../components/event/EventForm';

export default function EditEvent() {
  const [editEvent, setEditEvent] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const { id } = router.query;

  // TODO: make a call to the API to get the game data
  useEffect(() => {
    getSingleEvent(id).then(setEditEvent);
  }, [id]);

  // TODO: pass object to form
  return (<EventForm user={user} obj={editEvent} onUpdate={getEvents} />);
}
