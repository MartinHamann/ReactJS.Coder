import React from 'react'

const ItemListContainer = ( props ) => {

    const {

        items,

    } = props;

    return (
        <div className='container'>
        {
            items.map( (elemento) =>{
                return <li>{elemento}</li>
            })
        }
        </div>
  )
}

export default ItemListContainer;