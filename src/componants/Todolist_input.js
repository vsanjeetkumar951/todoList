import React, { useState } from "react";
import "./Todolist_input.css";

function Todolist_input() {
  const [text, setText] = useState("");
  const [itemAdd, setItemadd] = useState([]);
  function addItem() {
    if (!text) {
    } else {
      setItemadd([...itemAdd, text]);
      setText(" ");
    }
  }

  function deleteItem(id) {
    const updatedItem = itemAdd.filter((elem, idx) => {
      return idx != id;
    });
    setItemadd(updatedItem);
  }

  function remove() {
    setItemadd([]);
  }
  return (
    <div className="todo">
      <div className="list">
        <input
          type="text"
          placeholder="Enter the list"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <i class="fas fa-plus add-btn" title="Add list" onClick={addItem}></i>
      </div>
      <div className="del">
        {itemAdd.map((elem, idx) => {
          return (
            <div key={idx} className="del1">
              <h3>{elem}</h3>
              <i
                class="fa-solid fa-trash"
                title="Delete Item"
                onClick={() => deleteItem(idx)}
              ></i>
            </div>
          );
        })}
      </div>
      <div className="remove">
        <button onClick={remove}>Remove it</button>
      </div>
    </div>
  );
}

export default Todolist_input;
