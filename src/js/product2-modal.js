const modalPM2 = document.querySelector('[name="product2-modal"]');
const overlayPM2 = document.querySelector('[name="product2-overlay"]');
const openModalBtnPM2 = document.querySelector('[name="product2-open"]');
const closeModalBtnPM2 = document.querySelector('[name="product2-close"]');

const openModalPM2 = function () {
  modalPM2.classList.remove('is-hidden');
  overlayPM2.classList.remove('is-hidden');
};

openModalBtnPM2.addEventListener('click', openModalPM2, { passive: true });

const closeModalPM2 = function () {
  modalPM2.classList.add('is-hidden');
  overlayPM2.classList.add('is-hidden');
};

closeModalBtnPM2.addEventListener('click', closeModalPM2, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalPM2.classList.contains('is-hidden')) {
      closeModalPM2();
    }
  },
  { passive: true }
);
