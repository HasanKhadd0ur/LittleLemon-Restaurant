import React from 'react'
import { BookingForm } from '../components/BookingForm'

export const Reservations = () => {

    const submit=(values)=>{
            alert(JSON.stringify(values, null, 2));
    }

  return (
    <section style={{marginTop:"4rem"}}>
        <h1 style={{textAlign:"center", fontSize:"4rem"}}>Booking a Table</h1>
        <BookingForm submit={submit}/>
    </section>
  )
}
