import type { NextPage } from 'next';
import Head from 'next/head';
import carsData from '../cars.json';
import { Logo } from 'vcc-ui';
import Carousel from '../components/Carousel';
import { useState } from 'react';

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const Home: NextPage = () => {
  const [cars, setCars] = useState<carProps[]>(carsData);
  return (
    <>
      <h1>Welcome to Next</h1>
      <Logo type='spreadmark' height={14} />
      <Carousel cars={cars} />
    </>
  );
};

export default Home;
