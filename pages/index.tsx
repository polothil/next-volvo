import type { NextPage } from 'next';
import carsData from '../cars.json';
import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';
import Search from '../components/Search';

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const Home: NextPage = () => {
  const [cars, setCars] = useState<carProps[]>(carsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState<carProps[]>([]);

  useEffect(() => {
    setCars(carsData);
    if (searchTerm !== '') {
      const newList: carProps[] = cars.filter((car) => {
        return car.bodyType.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredCars(newList);
    } else {
      setFilteredCars(cars);
    }
  }, [searchTerm, cars]);

  return (
    <>
      <Search filter={setSearchTerm} value={searchTerm} />
      {cars.length > 0 && searchTerm.length < 1 ? (
        <>
          <Carousel cars={cars} />
        </>
      ) : (
        <Carousel cars={filteredCars} />
      )}
    </>
  );
};

export default Home;
