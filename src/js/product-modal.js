const modalPM = document.querySelector('[name="product-modal"]');
const overlayPM = document.querySelector('[name="product-overlay"]');
const openModalBtnPM = document.querySelector('[name="product-open"]');
const closeModalBtnPM = document.querySelector('[name="product-close"]');

const openModalPM = function () {
  modalPM.classList.remove('is-hidden');
  overlayPM.classList.remove('is-hidden');
};

openModalBtnPM.addEventListener('click', openModalPM, { passive: true });

const closeModalPM = function () {
  modalPM.classList.add('is-hidden');
  overlayPM.classList.add('is-hidden');
};

closeModalBtnPM.addEventListener('click', closeModalPM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalPM.classList.contains('is-hidden')) {
      closeModalPM();
    }
  },
  { passive: true }
);
