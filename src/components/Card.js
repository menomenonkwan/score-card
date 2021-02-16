import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button, IconButton } from "@material-ui/core";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";

const Card = ({ player, removePlayer }) => {
  const [score, setScore] = useState(player.score);

  const handleRemove = () => {
    removePlayer(player.id);
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseScore = () => {
    setScore(score - 1);

    if (score <= 0) {
      setScore(0);
    }
  };

  const checkit = (e) => {};

  return (
    <li className="card">
      <IconButton type="button" onClick={handleRemove} className="del">
        <HighlightOffOutlinedIcon />
      </IconButton>
      <h2 onClick={checkit}>{player.name}</h2>
      <TransitionGroup component="p" className="score">
        <CSSTransition
          classNames="score"
          key={score}
          timeout={{ enter: 500, exit: 500 }}
        >
          <span>{score}</span>
        </CSSTransition>
      </TransitionGroup>
      <Button
        variant="contained"
        style={{
          backgroundColor: "var(--yellow)"
        }}
        onClick={increaseScore}
      >
        <AddOutlinedIcon style={{ color: "var(--black)" }} />
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "var(--yellow)"
        }}
        onClick={decreaseScore}
      >
        <RemoveOutlinedIcon style={{ color: "var(--black)" }} />
      </Button>
    </li>
  );
};

export default Card;
