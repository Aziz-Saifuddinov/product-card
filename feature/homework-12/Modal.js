export class Modal {

  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.closeButton = this.modal.querySelector('.modal-close-button');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.#initOpen(buttonId);
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    this.closeButton.removeEventListener('click', this.close);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.close);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', this.open);
  }

  #initClose() {
    this.closeButton.addEventListener('click', this.close);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.close);
    }
  }
}