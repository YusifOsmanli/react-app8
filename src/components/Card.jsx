import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import { useContext } from 'react'
import MainContext from '../Context'


const Card = ({item}) => {
  const {addToFavourite}= useContext(MainContext)
  return (
    <div className='card' style={{width : "18rem"}}>
       <img src={item?.thumbnail} style={{height: "200px"}} 
       className="card-img-top" alt="" />
       <div className='card-body'>
           <h5 className='card-tittle'>{item?.title}</h5>
           <p className='card-text'>{item?.price} AZN</p>
           <div className='card__btn'> 
           <Link className='btn btn-dark' to={`/${item?.id}`}>Detail</Link>
           <button  className='btn btn-dark'><i className='fa-regular fa-heart' style={{color:"white"}} onClick={(e)=>{
            addToFavourite(item)}}></i></button>
            <button  className='btn btn-dark'>Add to Basket</button>
           </div>
       </div>
    </div>
  )
}

export default Card