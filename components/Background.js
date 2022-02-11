import Image from 'next/image';

//Images
import hills from '../images/pattern-hills.svg';
import stars from '../images/bg-stars.svg';

const Background = () => {
  return (
    <>
      <div className='background__wrapper'>
        <div className='background__hills'>
          <Image src={hills} alt='hills' layout='fill' objectFit='cover' />
        </div>
      </div>
    </>
  );
};

export default Background;
