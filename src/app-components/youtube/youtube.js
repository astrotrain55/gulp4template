import { e } from 'libs';
import $ from 'common/tools';

function addEvent(iframe, event) {
  const video = iframe;
  video[event] = () => {
    video.contentWindow.postMessage(`{"event":"command","func":"${event}"}`, '*');
  };
}

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1&enablejsapi=1';
  return `https://www.youtube.com/embed/${id}${query}`;
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('youtube__media');
  iframe.classList.add('js-youtube-api');

  addEvent(iframe, 'playVideo');
  addEvent(iframe, 'pauseVideo');
  addEvent(iframe, 'stopVideo');

  return iframe;
}

function stopAllVideos() {
  const videos = $.all('.js-youtube iframe');

  _.each(videos, (video) => {
    video.stopVideo();
  });
}

function setupVideo(video) {
  const link = $.el('.js-youtube--link', video);
  const button = $.el('.js-youtube--button', video);
  const id = video.getAttribute('data-id');

  e.on('click', video, () => {
    const iframe = createIframe(id);

    // почему-то при удалении кнопки при клике не на первый слайд слайдер откатывается к началу
    button.remove();

    link.remove();
    video.appendChild(iframe);

    stopAllVideos();
  });

  link.removeAttribute('href');
  link.removeAttribute('target');
  video.classList.add('youtube--enabled');
}

function initYouTube() {
  const videos = $.all('.js-youtube');

  _.each(videos, (video) => {
    setupVideo(video);
  });
}

export default initYouTube;
