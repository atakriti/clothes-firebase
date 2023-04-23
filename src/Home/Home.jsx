import React, { useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import baner from "../images/baner.jpg"
import "./home.scss"
function Home() {
  let navigate = useNavigate()
  let sections = [
    {
      name: "T shirt",
      price:30,
      img: "https://i.pinimg.com/564x/17/da/c5/17dac5f23fc04afd23dce4cc4bde6546.jpg",
      quan: 1,
      gender: "man all",
      type: "clothes casual all",
      size:"S",
      id: 1,
      sale:10
    },
    {
      name: "Suit",
      price:70,
      img: "https://i.pinimg.com/564x/85/e0/18/85e018a1ac500b0c2f4de232fdbb06c7.jpg",
      quan: 1,
      gender: "man all",
      type: "clothes formal all",
      size:"S",
      id:11
    },
    {
      name: "Pajamas",
      price:40,
      img: "https://i.pinimg.com/564x/73/dd/10/73dd106c748f726e9f866356ac203fe0.jpg",
      quan: 1,
      gender: "women all",
      type: "clothes casual all",
      size:"S",
      id:21
    },
    {
      name: "Dress",
      price:300,
      img: "https://i.pinimg.com/564x/66/df/30/66df30c94ae083beaca8fb5eeaeeed4e.jpg",
      quan: 1,
      gender: "women all",
      type: "clothes formal all",
      size:"S",
      id: 31,
      sale:20
    },
    {
      name: "Nike",
      price:50,
      img: "https://i.pinimg.com/564x/ea/6a/f5/ea6af58fedf5b9d24a384dd43ab8017a.jpg",
      quan: 1,
      gender: "man all",
      type: "shoes casual all",
      size:"38",
      id:41
    },
    {
      name: "Formal Shoes",
      price:80,
      img: "https://i.pinimg.com/564x/a3/c5/18/a3c51812df4735ffe5e342edd9ab0f6f.jpg",
      quan: 1,
      gender: "man all",
      type: "shoes formal all",
      size:"38",
      id: 50,
      sale:10
    },
    {
      name: "AIR",
      price:50,
      img: "https://i.pinimg.com/564x/63/f3/bd/63f3bdf6629dac887c2e6d9edc82be4d.jpg",
      quan: 1,
      gender: "women all",
      type: "shoes casual all",
      size:"38",
      id:60
    },
    {
      name: "High Heels",
      price:80,
      img: "https://i.pinimg.com/564x/f4/05/74/f405749edf6f16fc9c6b4408a1919a85.jpg",
      quan: 1,
      gender: "women all",
      type: "shoes formal all",
      size:"38",
      id: 70,
      sale:20
    },
    {
      name: " Pants",
      price:34,
      img:"https://i.pinimg.com/564x/7a/5a/9c/7a5a9c8839edd6645baee55ff0ef5a1a.jpg",
      quan: 1,
      gender: "kids",
      type:"clothes all",
      size:"S",
      id: 80,
      sale:20
    },
    {
      name: "Sandals",
      price:25,
      img:"https://i.pinimg.com/564x/3f/90/78/3f90788f64bd0f2f1f4e1f6092c4fb83.jpg",
      quan: 1,
      gender: "kids",
      type:" shoes all",
      size:"15",
      id:98
    },
    {
      name: "Bag",
      price:35,
      img:"https://i.pinimg.com/564x/2b/5f/4d/2b5f4dd27586077288834a77ee592b4c.jpg",
      quan: 1,
      gender: "women all",
      type:" bags all",
      size:"",
      id:108
    },
    {
      name: "Ring",
      price:10,
      img:"https://i.pinimg.com/564x/c5/a8/c7/c5a8c7225a37c7be58d7bed5e7bec7dc.jpg ",
      quan: 1,
      gender: "women all",
      type:" accessories all",
      size:"",
      id:118
    },
    {
      name: "Eyeliner",
      price:30,
      img:"https://i.pinimg.com/564x/d0/7c/70/d07c704e6a5e73dd1de2483e517fa279.jpg",
      quan: 1,
      gender: "women all",
      type:"makeup all",
      size:"",
      id:128
    },
    {
      name: "Chanel coco ",
      price:50,
      img:"https://i.pinimg.com/564x/3b/45/ec/3b45ec4b48cc6a3bc4c846bd5517e5ec.jpg ",
      quan: 1,
      gender: "women all",
      type:"perfume all",
      size:"",
      id:138
    },
    {
      name: "Million",
      price:45,
      img:"https://i.pinimg.com/564x/30/f5/7b/30f57b5eb14afd9bc2588234ffad7752.jpg",
      quan: 1,
      gender: "man all",
      type:"perfume all",
      size:"",
      id:147
      }
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
            <h3>{item.gender.split(" ")[0].toString()[0].toUpperCase() + item.gender.split(" ")[0].toString().slice(1)}</h3>
          <h3>{item.type.split(" ")[1].toString()[0].toUpperCase() + item.type.split(" ")[1].toString().slice(1)}</h3>
            <button onClick={() => navigate(`/single/${item?.id}`)}>Shop</button>
           </span>
          </div>
        ))}
      </section>
      <Footer/>
    </div>
  )
}

export default Home