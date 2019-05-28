function initYouTube() {
  const videos = document.querySelectorAll('.js-youtube');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  const link = video.querySelector('.js-youtube--link');
  const button = video.querySelector('.js-youtube--button');
  const id = video.getAttribute('data-id');

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  link.removeAttribute('target');
  video.classList.add('youtube--enabled');
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

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1&enablejsapi=1';

  return `https://www.youtube.com/embed/${id}${query}`;
}

function addEvent(video, event) {
  video[event] = () => {
    video.contentWindow.postMessage(`{"event":"command","func":"${event}"}`, '*');
  };
}

export {initYouTube};
