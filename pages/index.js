import Head from 'next/head';
//Components
import Background from '../components/Background';
import Socials from '../components/Socials';
import Time from '../components/Time';

const Home = () => {
  return (
    <>
      <Head>
        <title>Countdown timer</title>
        <meta name='description' httpEquiv='X-UA-Compatible' content='Countdown timer' />
        <link rel='icon' href='/icon.png' />
      </Head>
      <Background />
      <div className='main'>
        <h1 className='main__title'>we&apos;re launching soon</h1>
        <Time />
      </div>
      <Socials />
    </>
  );
};

export default Home;
