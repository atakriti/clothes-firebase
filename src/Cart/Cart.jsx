import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import { context } from "../Context";
import "./cart.scss";
function Cart() {
  let { findUser } = useContext(context);
  // const total = findUser?.cart
  //   .map((item) => item.quan * item.price)
  //   .reduce((acc, curr) => acc + curr, 0);
  const total = findUser?.cart.map(item => {
    let totalPrice = item.quan * item.price;
    if (item.sale) {
      totalPrice *= (100 - item.sale) / 100; 
    }
    return totalPrice;
  }).reduce((acc, curr) => acc + curr, 0);
  
  let handleDelete = async (item) => {
    let selectedUser = doc(db, "users", findUser?.id);
    try {
      let getDocument = await getDoc(selectedUser);
      let currentCart = getDocument.get("cart") || [];

      if (currentCart.some((it) => it.id === item.id)) {
        let filtering = currentCart.filter((single) => single.id !== item.id);
        await updateDoc(selectedUser, { cart: filtering });
        return;
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="titles">
          <div className="title_1">
            <h4>Products</h4>
          </div>
          <span>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </span>
        </div>
        {findUser?.cart.map((item) => (
          <div key={item.id} className="singleCart">
            <div className="cart-left">
              <Link title="Back to this product" to={`/single/${item.id}`}>
                <img src={item.img} alt="" />
              </Link>
              <div className="cart_content">
                <h5>{item.name}</h5>
                {item.sale === undefined ? (
                  <h5>Price: {item.price}€</h5>
                ) : (
                  <>
                    <h5>
                      Price: {item.price - (item.price * item.sale) / 100}€ /{" "}
                      <span
                        style={{
                          textDecoration: "line-through red",
                          color: "red",
                        }}
                      >
                        {item.price}€
                      </span>{" "}
                    </h5>
                  </>
                )}

                <h5>Size: {item.size}</h5>
                <h4 onClick={() => handleDelete(item)}>Remove</h4>
              </div>
            </div>
            <div className="cart-right">
              <h4>{item.quan}</h4>
              {item.sale === undefined ? (
                        
                <h4>{item.price * item.quan}€</h4>
              ): (
                  <h4>{(item.price - (item.price * item.sale) / 100) * item.quan }</h4>
                        )}

            </div>
          </div>
        ))}
        <div className="total-amount">
          <span>
            <h3>Subtotal</h3>
            <h3>{total}€</h3>
          </span>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
