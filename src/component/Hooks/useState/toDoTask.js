import React, { useState } from "react";
function ToDoTask(props) {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleInputVal(e) {
    setInput(e.target.value);
  }
  const addItem = () => {

    if(input && !itemList.includes(input)){
      itemList.push(input)
      setItemList([...itemList])
    }
    else{
      itemList.includes(input) ? alert('Repeated task not allowed') :alert('Please enter task')
    }
  };
  const deleteItem = () => {
    if(itemList.length){
      itemList.pop()
      setItemList([...itemList])
    }
    else{
      alert('No Task available')
    }
  };
  const handleDelete = (ind) => {
   itemList.splice(ind,1)
    setItemList([...itemList]);
  };
  return (
    <>
<h1>Simple TODO APP</h1>
      <div>
     
        <input type="text" value={input} onChange={handleInputVal} />
        <button onClick={addItem}>Add Item</button>
        <button onClick={deleteItem}>Delete Item</button>
      </div>
      <ul>
        {itemList.map((item, index) => {
          return (
            // <div>
              <li key={index}>
                {item}
              <div> <button onClick={() => handleDelete(index)}>delete Item</button></div> 
              </li>
            // </div>
          );
        })}
      </ul>
    </>
  );
}
export default ToDoTask;
