import React, { useContext } from 'react'
import Card from './Card'
import MainContext from '../Context'
import "./Cards.css"

const Cards = () => {
    const{data,filterData}=useContext(MainContext)
  return (
    <div className='cards'>
       {
        (filterData?.length > 0 ? data : filterData).map((item,index) =>{
            return <Card item={item} key={index} />
        })
       }
    </div>
  )
}

export default Cards