import Todoie from './component/Todoie';
import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const ListItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    document.getElementById('myinput').value=''
  };
  const deleteItems =(id)=>{
  
    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
return index !==id ;
      })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">

          <br />
          <h1>Todo List</h1>
          <br />
          <input type='text' placeholder='Add a Items' id='myinput' onChange={itemEvent} />
          <button onClick={ListItem}> + </button>
          <ol>
            {
              Items.map((itemVal,index) => {
                return (
                 <Todoie
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems}
                />
              );
              })
            }


          </ol>
        </div>
      </div>


    </>
  )
}

export default App




