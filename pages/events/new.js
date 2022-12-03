import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import EventForm from '../../components/event/EventForm';
import { useAuth } from '../../utils/context/authContext';

const NewEvent = () => {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <div>
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
      >
        Register New Event
      </Button>
      <h2>Register New Event</h2>
      <EventForm user={user} />
    </div>
  );
};

export default NewEvent;
