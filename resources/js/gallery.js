import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const galleryElements = document.querySelectorAll('.gallery-swiper');

  galleryElements.forEach((element) => {
    const container = element.parentElement;

    new Swiper(element, {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: container.querySelector('.swiper-btn-next'),
        prevEl: container.querySelector('.swiper-btn-prev'),
      },
      pagination: {
        el: element.querySelector('.swiper-pagination'),
        clickable: true,
      },
    });
  });
});
