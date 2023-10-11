import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = ({list}) => {

  let {index} = useParams();
  return (
    <div className='item-item'>
      <h3>{list[index].name}</h3>
      <img src={"data:image/;base64,"+list[index].imgSrc} width='300px'/>
      <p>
        <span>출생연도 : {list[index].age}</span><br/>
        <span>키 : {list[index].height}cm</span><br/>
        <span>몸무게 : {list[index].weight}kg</span><br/>
        <span>소속팀 : {list[index].team}</span>
      </p>
    </div>
  )
}

export default Detail