document.addEventListener('DOMContentLoaded', () => {
  const openAbout = document.getElementById('open-about') as HTMLAnchorElement | null;
  const modal = document.getElementById('modal-about') as HTMLElement | null;
  const closeBtn = modal?.querySelector('.modal__close') as HTMLButtonElement | null;

  const toggleModal = (state: boolean): void => {
    if (modal) {
      modal.classList.toggle('modal--active', state);
      document.body.style.overflow = state ? 'hidden' : '';
    }
  };

  openAbout?.addEventListener('click', (e) => {
    e.preventDefault();
    toggleModal(true);
  });

  closeBtn?.addEventListener('click', () => toggleModal(false));

  modal?.querySelector('.modal__overlay')?.addEventListener('click', () => toggleModal(false));
});