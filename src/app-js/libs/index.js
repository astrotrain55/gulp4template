import SmoothScroll from 'smooth-scroll';
import Ajax from './axios';
import e from './events';

new SmoothScroll('a[href*="#"]', { // eslint-disable-line no-new
  speed: 500,
  speedAsDuration: true,
});

export { Ajax };
export { e };
