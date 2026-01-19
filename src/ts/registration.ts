export function setRegistrationYear() {
    const yearElement = document.getElementById('rg-current-year') as HTMLElement;
    yearElement.textContent = new Date().getFullYear().toString();
}
export const initRegistration = (): void => {
  const regBtn = document.querySelector('.registration .btn-outline') as HTMLButtonElement | null;

  if (regBtn) {
    regBtn.addEventListener('click', () => {
      console.log('Redirecting to classes...');
      // Здесь можно добавить вызов модалки или переход на страницу
      alert('Registration form will be available soon!');
    });
  }
};