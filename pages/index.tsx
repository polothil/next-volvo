import type { NextPage } from 'next';
import Carousel from '../components/Carousel';
import { useEffect, useState } from 'react';
import Search from '../components/Search';
import { TextInput } from 'vcc-ui';
import { server } from '../config';

type HomeProps = {
  carsData: {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
  }[];
};

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const Home: NextPage<HomeProps> = () => {
  const [cars, setCars] = useState<carProps[]>();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState<carProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${server}/api/cars.json`);
        const data = await res.json();
        setCars(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (cars && searchTerm !== '') {
      const newList: carProps[] = cars.filter((car) => {
        return car.bodyType.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredCars(newList);
    } else {
      cars && setFilteredCars(cars);
    }
  }, [searchTerm, cars]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className='filter'>
            <TextInput
              value={searchTerm}
              label='Filter by car type'
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          {/* <Search filter={setSearchTerm} value={searchTerm} /> */}
          {cars && cars.length > 0 && searchTerm.length < 1 ? (
            <>
              <Carousel cars={cars} />
            </>
          ) : (
            <Carousel cars={filteredCars} />
          )}
        </>
      )}
    </>
  );
};

export default Home;
