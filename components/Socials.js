//Icons
//import { FaGithub } from 'react-icons/fa';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaPinterestP } from '@react-icons/all-files/fa/FaPinterestP';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

const Socials = () => {
  return (
    <div className='socials'>
      <a href='https://github.com/yhetlaw/countdown-timer' target='_blank' rel='noreferrer'>
        <FaFacebookSquare className='socials__icon' />
      </a>
      <a href='https://github.com/yhetlaw/countdown-timer' target='_blank' rel='noreferrer'>
        <FaPinterestP className='socials__icon' />
      </a>
      <a href='https://github.com/yhetlaw/countdown-timer' target='_blank' rel='noreferrer'>
        <FaInstagram className='socials__icon' />
      </a>
    </div>
  );
};

export default Socials;
