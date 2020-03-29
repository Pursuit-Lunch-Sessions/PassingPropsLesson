import React, { useState } from "react";
import axios from "axios";

const ChildComponent = ({ setID, handleSubmit, handleClick }) => {
  return (
    <div className="childComponent">
      <form type="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => {
            setID(e.currentTarget.value);
          }}
          placeholder="enter a poke ID"
        ></input>
        <button type="submit">Submit</button>
      </form>

      <button type="click" onClick={handleClick}>
        Add +1 to pokeID
      </button>
    </div>
  );
};

export default ChildComponent;

// USELESS COD **** just made my child component cleaner with props
//   const [id, setID] = useState("");

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log(
//       "Child component form just submitted AND but invoked(used) on child"
//     );
//     let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
//     debugger;
//   };

//   console.log(id);
