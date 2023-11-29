import React, { useContext, useState } from 'react'
import MainContext from '../Context'

const Favourites = () => {
  const {favourites,deleteFavourites} =useContext(MainContext)
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      favourites.map((item,index)=>{
        return(
          <tr key={index}>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td><button onClick={(e)=>{
            deleteFavourites(item)}} className='btn btn-danger'>delete</button></td>
    </tr>
        )
      })
      
    }
   
  </tbody>
</table>
  )
}

export default Favourites