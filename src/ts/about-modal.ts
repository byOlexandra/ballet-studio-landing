export const initAboutModal = () => {
  const openBtn = document.querySelector('#open-about');
  const modal = document.querySelector('#aboutModal');
  const closeBtn = document.querySelector('#closeAbout');
  const overlay = modal?.querySelector('.modal__overlay');

  const toggle = (state: boolean) => {
    modal?.classList.toggle('is-open', state);
    document.body.style.overflow = state ? 'hidden' : '';
  };

  openBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    toggle(true);
  });

  closeBtn?.addEventListener('click', () => toggle(false));
  overlay?.addEventListener('click', () => toggle(false));
};