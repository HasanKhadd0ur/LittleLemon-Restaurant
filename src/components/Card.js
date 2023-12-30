import './Card.css';
import React from 'react';
import icon from '../assets/Dish icon.svg'
import { BiDish } from "react-icons/bi";
const Card = ({img,dish}) => {
    return (
        <div className='card'>
            <div className='card-img-conteiner'>
                <img src={img} alt="salad" 
                className='card-img'/>
            </div>

            <div className='card-prices'>
                <span>{dish.title}</span>
                <span className='price'>${dish.price}</span>
            </div>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit nesciunt tempore placeat ut vel aperiam esse adipisci, ea praesentium eius, similique fuga doloribus autem? Sequi dolor suscipit tempora similique!
            </div>
            <a href='/order-online' className='card-link'>
                <span >
                Order a delivery 
                <BiDish/>
                </span>
             </a>
        </div>
    );
}

export default Card;
