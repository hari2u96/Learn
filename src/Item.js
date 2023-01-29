import React from 'react'

function Item({name,description}) {
  return (
    <div>
        <p>{name}</p>
        <p><i>{description}</i></p>
    </div>
  )
}

export default Item