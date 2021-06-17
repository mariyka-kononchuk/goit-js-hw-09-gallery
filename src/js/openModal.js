
import { refs } from './refs';
import { onCloseModal } from './closeModal';

refs.imageGallery.addEventListener('click', onOpenModal);

export function onOpenModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  refs.divModal.classList.add('is-open');
  refs.imageModal.src = event.target.dataset.source;
  refs.imageModal.alt = event.target.alt;

  refs.buttonModal.addEventListener('click', onCloseModal);
  refs.overlayModal.addEventListener('click', onCloseModal);

  document.addEventListener('keydown', event => {
    if (event.code === "Escape") {
      onCloseModal();
    };
  }
  )
};