import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta';

const learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta />
      <div>Shop {id}</div>
      <div className='btn-group'>
        <button>
          <Link href='/'>Go Back</Link>
        </button>
      </div>
    </>
  );
};

export default learn;
