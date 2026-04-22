import { useState, useEffect } from 'react';

import { Car } from '../types';
import { getAllCars } from '../api/carApi';


export const useCars = () => {

  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getAllCars();
        setCars(data)
      } catch (error) {
        console.error("HomeScreen: Error fetching cars =", error);
      }
    };
    fetchCars();
    
  }, []);
  return { cars };

  

}