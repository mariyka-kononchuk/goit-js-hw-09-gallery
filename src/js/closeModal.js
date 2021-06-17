
import { refs } from './refs';

export function onCloseModal() {
  refs.divModal.classList.remove('is-open');
  refs.divModal.classList.add('is-close');
  refs.imageModal.src = "";
  refs.buttonModal.removeEventListener('click', onCloseModal);
  refs.overlayModal.removeEventListener('click', onCloseModal);
}
