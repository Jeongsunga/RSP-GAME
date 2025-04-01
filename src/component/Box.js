import React from 'react'

const Box = (props) => {

  let result = (props.title === "Computer" && props.result !== "tie" && props.result !== "")
    ? (props.result === "win" ? "lose" : "win") : props.result;

  return (
    <div>
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className={`box ${result}`}>
          <h1>{props.title}</h1>
          <h2>{props.item && props.item.name ? props.item.name : '?'}</h2>
          <img className='item-img' src={props.item && props.item.img ? props.item.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIo8KiiBmDcT4q0jbL_Swja4Oa5aL8E9rXg&s'}/>
          <h2>{result}</h2>
          <h2>Score : {props.score}</h2>
      </div>
    </div>
  )
}

export default Box