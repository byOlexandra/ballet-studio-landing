export function setRegistrationYear() {
    const yearElement = document.getElementById('rg-current-year') as HTMLElement;
    yearElement.textContent = new Date().getFullYear().toString();
}