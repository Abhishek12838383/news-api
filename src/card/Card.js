import React from 'react'
import './Card.css'

const Card = ({data}) => {

  return (
    <div className='card'>
      {
        data.map((id,index)=>{
            return (
              <div className='card-item'>
                <img src={id.urlToImage} alt='' />
              <h3>{id.title}</h3>   
              <p>{id.description}</p>

              <button onClick={()=>window.open(id.url)} className='learn'>Learn more</button>
              </div>
            );
        })}
    </div>
  )
}

export default Card
