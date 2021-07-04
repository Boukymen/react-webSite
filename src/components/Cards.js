import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1> Check out these EPIC Destinations</h1>
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
            text = "In the open sea like a pirate, we know what drives you"
            label= 'Liberty'
            path = '/services'
            />
            <CardItems 
            src = "/images/img-8.jpg"
            text = "a journey rich in discovery and North African culture"
            label= 'exploration'
            path = '/services'
            />
            <CardItems 
            src = "/images/img-4.jpg"
            text = "the island with wonderful treasures, a breathtaking landscape"
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
