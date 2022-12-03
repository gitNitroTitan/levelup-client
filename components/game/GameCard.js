import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { deleteGame } from '../../utils/data/gameData';

const GameCard = ({ gameObj }) => {
  console.warn(gameObj);
  const deleteThisGame = () => {
    if (window.confirm(`Delete ${gameObj.title}?`)) {
      deleteGame(gameObj.id).then(() => {
        window.location.reload();
      });
    }
  };
  return (
    <Card className="text-center">
      <Card.Header>{gameObj.title}</Card.Header>
      <Card.Body>
        <Card.Title>By: {gameObj.maker}</Card.Title>
        <Card.Text>{gameObj.numberOfPlayers} players needed</Card.Text>
        <Button variant="danger" onClick={deleteThisGame} className="m-2">
          DELETE
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">Skill Level: {gameObj.skillLevel}</Card.Footer>
    </Card>
  );
};

GameCard.propTypes = {
  gameObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    maker: PropTypes.string,
    numberOfPlayers: PropTypes.number,
    skillLevel: PropTypes.number,
  }).isRequired,
};

export default GameCard;
