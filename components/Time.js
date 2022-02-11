const Time = () => {
  const countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();
  let timeUpdate = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }, 1000);

  return (
    <div className='main__time'>
      <div className='main__card'>
        <div className='main__image'>
          <div className='main__division'></div>
          <div className='main_circle-left'></div>
          <div className='main_circle-right'></div>
          <p id='days' className='main__number'></p>
        </div>
        <div className='main__title'>days</div>
      </div>
      <div className='main__card'>
        <div className='main__image'>
          <div className='main__division'></div>
          <div className='main_circle-left'></div>
          <div className='main_circle-right'></div>
          <p id='hours' className='main__number'></p>
        </div>
        <div className='main__title'>hours</div>
      </div>
      <div className='main__card'>
        <div className='main__image'>
          <div className='main__division'></div>
          <div className='main_circle-left'></div>
          <div className='main_circle-right'></div>
          <p id='minutes' className='main__number'></p>
        </div>
        <div className='main__title'>minutes</div>
      </div>
      <div className='main__card'>
        <div className='main__image'>
          <div className='main__division'></div>
          <div className='main_circle-left'></div>
          <div className='main_circle-right'></div>
          <p id='seconds' className='main__number'></p>
        </div>
        <div className='main__title'>seconds</div>
      </div>
    </div>
  );
};

export default Time;
