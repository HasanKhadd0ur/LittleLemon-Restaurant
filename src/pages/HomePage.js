import React from 'react'
import restaurantFood from '../assets/restauranfood.jpg'
import salad from '../assets/greek salad.jpg'
import Card from '../components/Card'

export const HomePage = () => {
  const cards= [{title:"greek salad",price:10},{title:"g salad",price:13},{title:"s salad",price:14},{title:"greek salad",price:20},{title:"greek salad",price:30}];
  return (
    <>
        <section>
          <article className='hero'>
            <div>
              <div>
              <h1 className='hero-title'>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                . Repellat dolorum, explicabo numquam fugit, quam et
                 minus cum obcaecati sit omnis modi blanditiis ipsa a nulla magni. Eligendi 
                molestias nostrum dolorum.
              </p>
              </div>
              <a className='hero-button' href="/reservations" role="button">Reserve a table</a>
            </div>
              <img className='hero-image' src={restaurantFood} alt="restaurant hero" />
          </article>

          <article className='specials'>
            <h2 className='bg-c'>Specials</h2>
            <div className='cards'>
             {cards.map(item=><Card img={salad} dish={item} />)}
            </div>
          </article>
        </section>
    </>
  )
}
