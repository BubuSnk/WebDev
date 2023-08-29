import React from 'react'

const Count = (props) => {
  return (
    <h1>
        <div className='Counter'>
            {props.count}
        </div>
    </h1>
  )
}

export default Count