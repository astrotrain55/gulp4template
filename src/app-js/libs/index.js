import SmoothScroll from 'smooth-scroll';
import Ajax from './axios';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

export { Ajax, scroll };
