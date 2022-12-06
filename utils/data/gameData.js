import { clientCredentials } from '../client';

const getGames = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleGame = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createGame = (user, game) => new Promise((resolve, reject) => {
  const gameObj = {
    maker: game.maker,
    title: game.title,
    number_of_players: Number(game.number_of_players),
    skill_level: Number(game.skill_level),
    game_type: Number(game.gameTypeId),
    user_id: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(gameObj),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const updateGame = (user, game, id) => new Promise((resolve, reject) => {
  const gameObj = {
    maker: game.maker,
    title: game.title,
    number_of_players: Number(game.number_of_players),
    skill_level: Number(game.skill_level),
    game_type: Number(game.gameTypeId),
    uid: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/games/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(gameObj),
  })
    .then((response) => resolve(response))
    .catch(reject);
});

const getGameTypes = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/gametypes`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteGame = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${id}`, {
    method: 'DELETE',
  }).then(resolve).catch(reject);
});

export {
  getGames, createGame, getGameTypes, updateGame, getSingleGame, deleteGame,
};
