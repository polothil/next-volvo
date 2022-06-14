// import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Meta from '../../../components/Meta';
import { server } from '../../../config';

type Props = {
  car: {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
  };
};

const learn: React.FC<Props> = ({ car }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <>
      <Meta title={car.id} description={car.modelName} />
      <h1>{car.id}</h1>
      <p>{car.bodyType}</p>
      <br />
      <img src={car.imageUrl} alt='' />
      <button>
        <Link href='/'>Go Back</Link>
      </button>
    </>
  );
};

export default learn;

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/cars/${context.params.id}`);
  console.log(res);

  const car = await res.json();
  return {
    props: {
      car,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/cars`);

  const cars = await res.json();
  const ids = cars.map((article: any) => article.id);

  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
