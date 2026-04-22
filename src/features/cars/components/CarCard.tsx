import React, { useState } from 'react'
import { Car } from '../types'
import { useBookmark } from '../../bookmark/hooks/useBookmark';



type CarCardProps = {
  car: Car;
};


const CarCard = ({ car }: CarCardProps) => {


  return (
    <div className='bg-cyan-200'>
      <div className="relative">
        <img src={car.mainImage} alt={car.brand} className='size-64' />
        <button 
          className="absolute top-2 right-2"> show bookmarks</button>
      </div>
      <h2>{car.brand} {car.model}</h2>
      <p>{car.price}</p>
      <p>{car.manufacturingYear}</p>
      
    </div>
  );
};

export default CarCard;