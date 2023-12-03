import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import {getProductos }from "../../asyncmock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    getProductos().then(response => setProducts(response))
  },[])

  return (
    <Box component={'main'}>
      <h2> {greeting}</h2>
      <ItemList products={products}></ItemList>

      {/* Para probar el efecto del navBar */}
      <Box height={'200vh'}></Box>
    </Box>
  )
}

export default ItemListContainer