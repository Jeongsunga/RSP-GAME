import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img ? props.item.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIo8KiiBmDcT4q0jbL_Swja4Oa5aL8E9rXg&s'}/>
        <h2>WIN</h2>
    </div>
  )
}

export default Box