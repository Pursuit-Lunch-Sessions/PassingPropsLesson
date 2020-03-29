import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import axios from "axios";

const ParentComponent = () => {
  let [pokeID, setPokeID] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(
      "child component form just submitted, but but invoked(used) in Parent"
    );
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}/`);
    debugger;
  };

  const handleClick = () => {
    setPokeID(Number(pokeID) + 1);
  };

  console.log(pokeID);
  return (
    <>
      <div className="parentComponent">
        <ChildComponent
          setID={setPokeID}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
        />
      </div>
    </>
  );
};

export default ParentComponent;
