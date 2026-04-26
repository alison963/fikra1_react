
import { useAuthContext } from '../../features/auth/context/AuthContext';
import CarCard from '../../features/cars/components/CarCard';
import { useNavigate } from "react-router-dom";

import { useCars } from '../../features/cars/hooks/useCars';

const HomeScreen = () => {

  const { isAuthenticated, logout, user } = useAuthContext();
  const { cars } = useCars();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  }
    
    return (
      <div>
        {isAuthenticated ? (
          <div className='flex flex-row justify-between m-4 content-center'>
            <h1 className='p-2 rounded m-4'>welcome {user?.userName}</h1> {/* ? ist hier weil user auch den null haben kann.. */}
            <form onSubmit={handleLogout} >
              <button className='bg-gray-500 text-white p-2 rounded m-4' type="submit">Logout</button>
            </form>
            <button onClick={() => navigate("/bookmarks")}>
              My Bookmarks
            </button>
          </div>
        ) : null}
        <div className='flex flex-wrap gap-4 justify-center'>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
  )
}

export default HomeScreen