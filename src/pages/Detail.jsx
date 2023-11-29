import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import MainContext from '../Context'
import { Toaster } from 'react-hot-toast'
import "./Detail.css"

const Detail = () => {
    const {id}= useParams()
    const {item,setItem,addToFavourite}= useContext(MainContext)
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
            setItem(res.data)
        })
    },[])
  return (
    <div className='detail'>
       <div className='detail__image'>
          <img style={{height:"400px",width:"600px"}} src={item?.thumbnail} alt="" />
       </div>
       <div className='detail__text'>
           <h3><b>Title:</b> {item?.title}</h3>
           <p><b>Price:</b> {item?.price}</p>
           <p><b>Category:</b> {item?.category}</p>
           <p><b>Brand:</b> {item?.brand}</p>
           <p><b>Stock:</b> {item?.stock}</p>
           <p><b>Description:</b> {item?.description}</p>
           <button className='btn btn-dark' onClick={(e)=>{
            addToFavourite(item)
           }}>addToFavourite</button>
       </div>
    </div>
  )
}

export default Detail