import React, { useState } from 'react'
import Button from './Button'
import Count from './Count'

const Box = (props) => {

    const[count,setCount] = useState(0);

    const handlecallback = (childData) =>{
        if(count===10 && childData===1){
            return alert("Cannnot Vote more")
        }
        if(count===0 && childData===-1){
            return alert("Cannot Unvote")
        }

    setCount((prevCount) => prevCount + childData)
    }

    const countdisplay = () =>{
        if(count >=10){
            return "MAX";
        }else if(count <=0){
            return "MIN";
        }else{
            return count;
        }
    }
    
    return (
        <div className='Box'>
            <div className='Top'>
                <div className='text'>
                    <h2>{props.Title}</h2>
                    <h3>{props.food}</h3>
                    <p>{props.detail}</p>
                </div>
                <img src={props.image} alt="food"/>
            </div>
            <div className='Bot'>
                <Button label="Click to Vote" clickstatus = {handlecallback}/>
                <Count count = {countdisplay()}/>
                <Button label="Click to Unvote" clickstatus = {handlecallback}/>
                
                
            </div>
        </div>
    )
}

export default Box