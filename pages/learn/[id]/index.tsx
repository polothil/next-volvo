import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Meta from '../../../components/Meta';
import { server } from '../../../config';
import { View, Button } from 'vcc-ui';

type carProps = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

const learn = () => {
  const [carDetails, setCarDetails] = useState<carProps[]>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${server}/api/cars.json`);
        const data = await res.json();
        setCarDetails(data.filter((car: carProps) => car.id === id));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {carDetails && carDetails.length > 0 && (
            <>
              <Meta title={carDetails[0].id} description={carDetails[0].modelName} />
              <div className='content'>
                <h1>{carDetails[0].modelName}</h1>
                <h2>{carDetails[0].bodyType.toUpperCase()}</h2>
                <h2>{carDetails[0].modelType.toUpperCase()}</h2>
                <img src={carDetails[0].imageUrl} alt='' />
                <div className='btn-group'>
                  <View maxWidth='280'>
                    <Button>
                      <Link href='/'>Go Back</Link>
                    </Button>
                  </View>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default learn;
