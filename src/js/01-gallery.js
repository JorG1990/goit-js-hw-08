// Add imports above this line
import { galleryItems } from './gallery-items';

// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery")

const galleryImage = galleryItems.map (({preview,original,description}) =>

  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`).join("");

gallery.innerHTML= galleryImage;
gallery.style.listStyle = "none";
  const lightbox = new SimpleLightbox('.gallery a', {
    animationSpeed: 250,
    captionsData: "alt",
  });