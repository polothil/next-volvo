import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../../../components/Meta';
import { View, Button } from 'vcc-ui';

const learn = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta />
      <div>Shop {id}</div>
      <br />
      <div className='btn-group'>
        <View maxWidth='280'>
          <Button>
            <Link href='/'>Go Back</Link>
          </Button>
        </View>
      </div>
    </>
  );
};

export default learn;
