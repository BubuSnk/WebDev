import React from 'react'
import "./App.css"
import Box from './comp/Box'

const App = () => {
  return (
    <div className='main'>
      <h1 id="head"><b>โหวตอาหาร</b></h1>
      <Box 
        Title="อาหารคาว"
        food="ข้าวผัด"
        detail="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui enim, eleifend id lobortis at, viverra et felis. Maecenas rhoncus metus odio, id facilisis arcu semper in. Nulla et odio suscipit, laoreet nunc at, maximus velit. Curabitur eget dui cursus, elementum nibh eu, hendrerit nibh. Quisque sit amet consequat libero.'"
        image="https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg"
      />
      <Box 
        Title="อาหารหวาน"
        food="บัวลอย"
        detail="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui enim, eleifend id lobortis at, viverra et felis. Maecenas rhoncus metus odio, id facilisis arcu semper in. Nulla et odio suscipit, laoreet nunc at, maximus velit. Curabitur eget dui cursus, elementum nibh eu, hendrerit nibh. Quisque sit amet consequat libero.'"
        image="https://agarmermaid.com/wp-content/uploads/2021/09/shutterstock_2022331592-1-1-1536x864.jpg.webp"
      />
    
    </div>
  )
}

export default App
