import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
        { products.map((product) => <Item key={product.id} {...product}></Item>) } 
    </div>
  )
}

export default ItemList