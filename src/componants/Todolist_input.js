import React, { useState } from "react";

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
const updatedItem=itemAdd.filter((elem,idx)=>{
    return idx!=id;
});
setItemadd(updatedItem)
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter the todolist"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <i class="fas fa-plus add-btn" title="Add list" onClick={addItem}></i>
      </div>
      <div>
        {itemAdd.map((elem, idx) => {
          return (
            <div key={idx}>
              <h3>{elem}</h3>
              <i
                class="fa-solid fa-trash"
                title="Delete Item"
                onClick={()=>deleteItem(idx)}
              ></i>
            </div>
          );
        })}
      </div>
      <div>
        <button>Remove it</button>
      </div>
    </div>
  );
}

export default Todolist_input;
