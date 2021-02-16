import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const PlayerForm = ({ addNewPlayer }) => {
  const [newPlayer, setNewPlayer] = useState({
    id: "",
    name: "",
    score: 0
  });

  const handleChange = (e) => {
    setNewPlayer({ ...newPlayer, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPlayer.name.trim()) {
      addNewPlayer({ ...newPlayer, id: Date.now() });
      setNewPlayer({ ...newPlayer, name: "" });
    }
  };

  return (
    <form className="player-form" onSubmit={handleSubmit}>
      <TextField
        label="new player"
        name="task"
        type="text"
        value={newPlayer.name}
        onChange={handleChange}
        style={{
          minWidth: "250px"
        }}
      />
      <IconButton type="submit">
        <AddCircleOutlineIcon />
      </IconButton>
    </form>
  );
};

export default PlayerForm;
