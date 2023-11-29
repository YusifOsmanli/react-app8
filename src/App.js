
import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainContext from './Context';
import { createBrowserRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
import ROUTES from './router/ROUTES';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState('')
  const [favourites, setFavourites] = useState(localStorage.getItem("favourites") ? JSON.
    parse(localStorage.getItem("favourites")) : [])
  const router = createBrowserRouter(ROUTES)

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    const data = res.data.products;
    console.log(data)
    setData(data)
    setFilterData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSearch = (e) => {
    let searched = e.target.value.trim().toLowerCase()
    if (searched=="") {
      setData([...filterData])
    } else {
      let filteredData = filterData.filter((item) =>
        item.title.trim().toLowerCase().includes(searched)
      );
      setData([...filteredData])
    }
  }

  

  const addToFavourite = (product)=>{
    let item = data.find(item=>item.id==product.id)
    setFavourites([...favourites,item])
    localStorage.setItem("favourites",JSON.stringify([...favourites,item]))
    toast.success("Elave eledin")
  }
const deleteFavourites=(product)=>{
  let item=favourites.find(item=>item.id==product.id)
  favourites.splice(favourites.indexOf(item),1)
  setFavourites([...favourites])
  localStorage.setItem("favourites",JSON.stringify([...favourites]))
    toast.success("Sildin")
}

  const values = {
    data, setData, favourites, setFavourites, filterData, setFilterData, search, setSearch, handleSearch,item,setItem,addToFavourite,deleteFavourites
  }
  return (
    <MainContext.Provider value={values}>
      <RouterProvider router={router}/>
      <Toaster/>

    </MainContext.Provider>
  );
}

export default App;







