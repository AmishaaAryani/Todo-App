
import React from 'react'

const Todoie = (props) => {
    
  return (
    <>
    <div className='todoie'>
    <i className="fas fa-times" onClick={() =>{
        props.onSelect(props.id);
    }}/>
     <li> {props.text} </li>
     </div>
    </>
  )
}

export default Todoie
