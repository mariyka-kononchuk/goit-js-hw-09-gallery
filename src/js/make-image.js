import { galleryItems } from './gallery-items';
import { refs } from './refs';
import { onOpenModal } from './open-modal';

function makeImage(images) {
  return images
    .map(({ preview, description, original }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
      </a>
      </li>`;
    })
    .join("");
}

    const gallery = makeImage(galleryItems);
    refs.imageGallery.insertAdjacentHTML("beforeend", gallery);
    refs.imageGallery.addEventListener('click', onOpenModal);


