import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Meta from '../../../components/Meta';
import carsData from '../../../public/api/cars.json';

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const learn = () => {
  const [carDetails, setCarDetails] = useState<carProps[]>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setCarDetails(carsData.filter((car) => car.id === id));
  }, [id]);

  return (
    <>
      {carDetails && (
        <>
          <Meta title={carDetails[0].id} description={carDetails[0].modelName} />
          <h1>{carDetails[0].modelName}</h1>
          <h2>{carDetails[0].bodyType.toUpperCase()}</h2>
          <h2>{carDetails[0].modelType.toUpperCase()}</h2>
          <img src={carDetails[0].imageUrl} alt='' />
          <div className='btn-group'>
            <button>
              <Link href='/'>Go Back</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default learn;
