import React from 'react'
import chef from "../assets/restaurant chef B.jpg";
import restaurant from "../assets/restaurant.jpg";

export const About = () => {
  return (
    <section className='bg-c' style={{margin:"auto",marginBottom:"5rem",marginTop:"2rem", width:"90%",padding:"1rem 2rem"}}>
      <h1 style={{fontSize:"4rem",marginBottom:"5rem", textAlign:"center"}}> About us</h1>
      <article style={{marginBottom:"5rem"}} className='brd-l'>
        <h2 style={{fontSize:"2.5rem",marginBottom:"1rem"}}>Who are we?</h2>
        <div
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
        <p
          style={{
            maxWidth:"50%",
            marginRight:"4rem"
          }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto fugiat ipsa et enim quae error expedita fuga pl
          aceat est blanditiis autem velit reprehenderit, odit corrupti doloribus ipsam, nostrum ab!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aspernatur quisquam velit, dolores officiis culpa perspiciatis esse, distinctio possimus autem maiores libero 
          enim id, deleniti cum. Voluptatibus consequuntur architecto iure.
          </p>

          <img src={chef} alt="chef" 
            width={"20%"}
          />
        </div>
      </article>

      <article className='brd-l' >
        <h2 style={{fontSize:"2.5rem",marginBottom:"1rem"}}>Where we are?</h2>
        <div
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"

          }}
        >
            <img src={restaurant} alt="chef" 
            width={"20%"}
          />
        <p
          style={{
            maxWidth:"50%",
            marginLeft:"4rem"
          }}
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto fugiat ipsa et enim quae error expedita fuga pl
          aceat est blanditiis autem velit reprehenderit, odit corrupti doloribus ipsam, nostrum ab!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum aspernatur quisquam velit, dolores officiis culpa perspiciatis esse, distinctio possimus autem maiores libero 
          enim id, deleniti cum. Voluptatibus consequuntur architecto iure.
          </p>

 
        </div>
      </article>
    </section>
  )
}
