import axios from 'axios';
import { clientCredentials } from '../client';

const getEvents = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createEvent = (event) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  })
    .then(resolve)
    .catch(reject);
});

const updateEvent = (data, id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const deleteEvent = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/events/${id}`, {
    method: 'DELETE',
  }).then(resolve).catch(reject);
});

const leaveEvent = (eventId, user) => new Promise((resolve, reject) => {
  axios.delete(`${clientCredentials.databaseURL}/events/${eventId}/leave`, { data: user }).then(resolve).catch(reject);
});

const joinEvent = (eventId, user) => new Promise((resolve, reject) => {
  axios.post(`${clientCredentials.databaseURL}/events/${eventId}/signup`, user).then(resolve).catch(reject);
});

export {
  getEvents, getSingleEvent, createEvent, updateEvent, deleteEvent, leaveEvent, joinEvent,
};
