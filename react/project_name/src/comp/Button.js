import React from 'react'

function Button(props){
    const todad = () =>{
        if (props.label === "Click to Vote"){
            props.clickstatus(1)
        }
        else if(props.label === "Click to Unvote"){
            props.clickstatus(-1)
        }
    }
  return (
    <button className='btn' onClick={todad}>
        {props.label}
    </button>
  )
}

export default Button;