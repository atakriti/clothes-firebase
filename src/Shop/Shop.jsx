import React from 'react'
import "./shop.scss"
import {data} from "../data"
function Shop() {
  return (
      <div className='shop'>
          {data.map(item => (
              <div key={item.id} className="product">
                  
              </div>
          ))}
    </div>
  )
}

export default Shop