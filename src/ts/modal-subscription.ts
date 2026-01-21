export default function initSubModal() {
    const openBtn = document.querySelector<HTMLButtonElement>('[data-open="sub-modal"]');
    const closeBtn = document.querySelector<HTMLButtonElement>('[data-close]');
    const modal = document.querySelector(".sub-backdrop") as HTMLElement | null;

    const toggleModal = (isOpen: boolean): void => {
        if (!modal) return;

        modal.classList.toggle("is-open", isOpen);

        modal.setAttribute("aria-hidden", String(!isOpen));

        document.body.style.overflow = isOpen ? "hidden" : "auto";

        if (isOpen) {
            const input = modal.querySelector<HTMLInputElement>('input');
            input?.focus();
        }
    };

    openBtn?.addEventListener("click", () => toggleModal(true));
    closeBtn?.addEventListener("click", () => toggleModal(false));

    modal?.addEventListener("click", (e: MouseEvent) => {
        if (e.target === modal) {
            toggleModal(false);
        }
    });

    window.addEventListener("keydown", (e: KeyboardEvent): void => {
        const isHidden = modal?.getAttribute("aria-hidden") === "true";

        if (e.key === "Escape" && !isHidden) {
            toggleModal(false);
        }
    });
}