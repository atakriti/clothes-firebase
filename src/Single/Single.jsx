import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from "../data"
import "./single.scss"
function Single() {
    let { id } = useParams()
    let findProductId = data.find(item => item?.id === Number(id))
  return (
      <div className='single'>
          <div className="single-container">
              <a><img src={findProductId?.img} alt="" /></a>
              <span>
                  <h1>{findProductId.name}</h1>
                  <h3>Price: { findProductId.price}€</h3>
                  {/* ============= */}
                  {findProductId.type.includes("clothes") && 
                     <>
                          <h3>Select The size</h3>
                          <select  >
                            <option  value="" >Select</option>
                          <option defaultChecked value="S">S</option>
                          <option  value="M">M</option>
                          <option  value="L">L</option>
                              
                          </select>
                     </>
                      }
                      {/* ======================= */}
                      {findProductId.type.includes("shoes") && findProductId.gender.includes("man") &&
                     <>
                          <h3>Select The size</h3>
                          <select  >
                            <option  value="" >Select</option>
                          <option defaultChecked value="38">38</option>
                          <option  value="40">40</option>
                          <option  value="42">42</option>
                              
                          </select>
                     </>
                      }
                      {/* ====================== */}
                      {findProductId.type.includes("shoes") && findProductId.gender.includes("women") &&
                     <>
                          <h3>Select The size</h3>
                          <select  >
                            <option  value="" >Select</option>
                          <option defaultChecked value="38">38</option>
                          <option  value="40">40</option>
                          <option  value="42">42</option>
                              
                          </select>
                     </>
                      }
                      {/* ===================== */}
                      {findProductId.type.includes("shoes") && findProductId.gender.includes("kids") && 
                     <>
                          <h3>Select The size</h3>
                          <select  >
                            <option  value="" >Select</option>
                          <option defaultChecked value="18">18</option>
                          <option  value="20">20</option>
                          <option  value="22">22</option>
                              
                          </select>
                     </>
                    }

                      {/* ============= */}
                  <div className="single-btns">
                      <button>-</button>
                      <h5>3</h5>
                      <button>+</button>
                  </div>
                  <button>Add to cart</button>
              </span>
            </div>
      </div>
  )
}

export default Single