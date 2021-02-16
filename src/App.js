import "./styles.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import PlayerForm from "./components/PlayerForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function App() {
  const [players, setPlayers] = useState([]);

  const addNewPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  const renderPlayers = (player, index) => {
    return (
      <CSSTransition
        key={player.id}
        timeout={{ enter: 500, exit: 500 }}
        classNames="item"
      >
        <Card player={player} removePlayer={removePlayer} />
      </CSSTransition>
    );
  };

  return (
    <div className="container">
      <Header />
      <PlayerForm addNewPlayer={addNewPlayer} />
      <TransitionGroup component="ul" className="player-list">
        {players.map(renderPlayers)}
      </TransitionGroup>
      <Footer />
    </div>
  );
}
