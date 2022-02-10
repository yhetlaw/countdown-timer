import Image from 'next/image';

//Images
import hills from '../images/pattern-hills.svg';
import stars from '../images/bg-stars.svg';

const Background = () => {
  return (
    <>
      <div className='background__hills'>
        <Image src={hills} alt='hills' width={2000} height={300} />
      </div>
    </>
  );
};

export default Background;
