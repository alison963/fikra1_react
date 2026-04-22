import React from 'react'
import { useBookmark } from '../hooks/useBookmark';
import { useCars } from '../../cars/hooks/useCars';
import CarCard from '../../cars/components/CarCard';
import { useNavigate } from 'react-router-dom';

const BookmarkCard = () => {
  const { bookmarks } = useBookmark();
  const { cars } = useCars();
  const navigate = useNavigate();
  const filterdCars = cars.filter(car => bookmarks.includes(car.id))
  return (
    <div>

      <div className='flex justify-between'>
        <h1>My Bookmarks</h1>
        <button onClick={() => navigate("/")}>homepage</button>
      </div>
      <div className="flex flex-wrap gap-4">
        {filterdCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default BookmarkCard;

