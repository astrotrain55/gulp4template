// Плавный скролл
function smoothScroll(objSettings) {

  const defaultSettings = {
    el: 'a[href^="#"]',
    to: 'href',
    time: 2000,
    effect: 'swing'
  };

  const settings = Object.assign(defaultSettings, objSettings);

  $(settings.el).on('click', e => {
    e.preventDefault();
    let elementClick = $(e.currentTarget).attr(settings.to),
        destination  = $(elementClick).offset().top;
    $('html:not(:animated),body:not(:animated)').animate(
      {scrollTop: destination},
      settings.time,
      settings.effect
    );
  });
}

export {smoothScroll};
