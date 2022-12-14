const videos = document.querySelectorAll('[data-video]');
const MEDIA = '9TZXsZItgdw';
const QUERY = '?rel=0&showinfo=0&autoplay=1';

function findVideos() {
  if (videos.length >= 1) {
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
}

function setupVideo(video) {
  const link = video.querySelector('[data-video-link]');
  const button = video.querySelector('[data-video-button]');

  video.addEventListener('click', () => {
    const iframe = createIframe(MEDIA);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is--enabled');
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  return 'https://www.youtube.com/embed/' + id + QUERY;
}

export {findVideos};
