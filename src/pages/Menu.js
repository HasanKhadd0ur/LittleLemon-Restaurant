import React from 'react'
import Card from '../components/Card'

import LemonDessert from "../assets/lemon dessert.jpg"
import salad from '../assets/greek salad.jpg'


export const Menu = () => {
  const cards= [{title:"Lemon Dessert",price:120},{title:"greek salad",price:28},{title:"greek salad",price:28},{title:"greek salad",price:28}];
  
  return (
    <section>
    <article className='specials'>
      <h1 style={{fontSize:"4rem",marginBottom:"5rem"}} >Our Menu</h1>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridGap:"4rem"
      }}>{
        cards.map(item=><Card img={salad} dish={item} />)
      }
          </div>
  </article>
  </section>
  )
}
