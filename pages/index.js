import Head from 'next/head';

//Components
import Background from '../components/Background';
import Socials from '../components/Socials';
const Home = () => {
  return (
    <>
      <Head>
        <title>Countdown timer</title>
        <meta name='description' httpEquiv='X-UA-Compatible' content='Countdown timer' />
        <link rel='icon' href='/icon.png' />
      </Head>
      <Background />
      <div className='body__main'>
        <h1 className='body__title'>we&apos;re launching soon</h1>
        <div className='body__time'>
          <div className='body__card'>
            <div className='body__card-image'></div>
            <div className='body__card-title'>days</div>
          </div>
          <div className='body__card'>
            <div className='body__card-image'></div>
            <div className='body__card-title'>hours</div>
          </div>
          <div className='body__card'>
            <div className='body__card-image'></div>
            <div className='body__card-title'>minutes</div>
          </div>
          <div className='body__card'>
            <div className='body__card-image'></div>
            <div className='body__card-title'>seconds</div>
          </div>
        </div>
      </div>
      <Socials />
    </>
  );
};

export default Home;
