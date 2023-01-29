import React from 'react'
import Item from "./Item"
function Products({name,description,price}) {
  return (
    <div>
        

        <Item name={name} description={description}/>
        <h3>{price}</h3>
    </div>
  )
}

export default Products