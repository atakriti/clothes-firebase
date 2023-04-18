import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import baner from "../images/baner.jpg"
import "./home.scss"
function Home() {
  let sections = [
    {
      name: "Suit",
      price:70,
      img: "https://i.pinimg.com/564x/85/e0/18/85e018a1ac500b0c2f4de232fdbb06c7.jpg",
      quan: 1,
      gender: "Men",
      type: "Formal, Casual and more...",
      size:"S",
      id:1
    },
    {
      name: "Pajamas",
      price:40,
      img: "https://i.pinimg.com/564x/73/dd/10/73dd106c748f726e9f866356ac203fe0.jpg",
      quan: 1,
      gender: "Women",
      type: "Formal, Casual and more...",
      size:"S",
      id:2
    },
    {
      name: "AIR",
      price:50,
      img: "https://i.pinimg.com/564x/63/f3/bd/63f3bdf6629dac887c2e6d9edc82be4d.jpg",
      quan: 1,
      gender: "Women",
      type: "And more...",
      size:"38",
      id:3
    },
    {
      name: "Pajamas",
      price:38,
      img:"https://i.pinimg.com/564x/40/4f/b2/404fb2c645beda17df41923d38850871.jpg ",
      quan: 1,
      gender: "Kids",
      type:"And more...",
      size:"S",
      id:4
    },
    {
      name: "Bag",
      price:60,
      img:"https://i.pinimg.com/564x/72/59/ae/7259aed3aaafb6449cfbdb29299f2637.jpg",
      quan: 1,
      gender: "Women",
      type:"And more...",
      size:"",
      id:5
    },
    {
      name: "Rings",
      price:10,
      img:"https://i.pinimg.com/564x/f7/ab/45/f7ab45ba91d4b8989290e3fd1d5b4611.jpg",
      quan: 1,
      gender: "Women",
      type:"And more...",
      size:"",
      id:6
      },
      {
        name: "Chanel coco ",
        price:50,
        img:"https://i.pinimg.com/564x/3b/45/ec/3b45ec4b48cc6a3bc4c846bd5517e5ec.jpg ",
        quan: 1,
        gender: "Women",
        type:"And more...",
        size:"",
        id:7
        },
        {
        name: "Million",
        price:45,
        img:"https://i.pinimg.com/564x/30/f5/7b/30f57b5eb14afd9bc2588234ffad7752.jpg",
        quan: 1,
        gender: "Men",
        type:"And more...",
        size:"",
        id:8
        },
  ]
  return (
    <div className='home'>
      {/* Baner */}
          <div className="baner">
        <a ><img src={baner} alt="" /></a>
      </div>
      {/* Sections */}
      <section>
        <h1>Our offers, and more...</h1>
        {sections.map(item => (
          <div className='section-single' key={item.id}>
            <a ><img src={item.img} alt="" /></a>

            <span>
            <h2>{item.name}</h2>
            <h3>Price: {item.price}€</h3>
            <h3>{item.gender}</h3>
            <h3>{item.type}</h3>
            <button>Shop</button>
           </span>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  )
}

export default Home