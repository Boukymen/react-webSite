import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinatins</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems 
            src = "/images/img-9.jpg"
            text = "Explore the hidden waterfall deep inside the Amazon jungle"
            label= 'Adventure'
            path = '/services'
            />
            <CardItems 
            src = "/images/img-2.jpg"
            text = "Travel through the island of Bali in a Private Cruise"
            label= 'Luxury'
            path = '/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItems 
            src = "/images/img-3.jpg"
            text = "Explore the hidden waterfall deep inside the Amazon jungle"
            label= 'Liberty'
            path = '/services'
            />
            <CardItems 
            src = "/images/img-8.jpg"
            text = "Travel through the island of Bali in a Private Cruise"
            label= 'exploration'
            path = '/services'
            />
            <CardItems 
            src = "/images/img-4.jpg"
            text = "Travel through the island of Bali in a Private Cruise"
            label= 'Space for you'
            path = '/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
