import React from 'react'
import Card from '../components/Card'
import { IoSearchSharp } from "react-icons/io5";

import salad from '../assets/greek salad.jpg'


export const Menu = () => {
  const cards= [{title:"Lemon Dessert",price:120},{title:"greek salad",price:28},{title:"greek salad",price:28},{title:"greek salad",price:28}];
  
  return (
    <section>
    <article className='specials'>
      <div>
      <h1 style={{fontSize:"4rem",marginBottom:"5rem"}} className='bg-l' >Our Menu</h1>
      <div><IoSearchSharp /> <input type="text"  >Search for your dish </input> </div>
      </div>
      <div className='cards'>{
        cards.map(item=><Card img={salad} dish={item} />)
      }
          </div>
  </article>
  </section>
  )
}
