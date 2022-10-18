const modalBM = document.querySelector('[name="buy-now-modal"]');
const overlayBM = document.querySelector('[name="buy-now-overlay"]');
const openModalBtnBM = document.querySelector('[name="buy-now-open"]');
const closeModalBtnBM = document.querySelector('[name="buy-now-close"]');

const openModalBM = function () {
  modalBM.classList.remove('is-hidden');
  overlayBM.classList.remove('is-hidden');
};

openModalBtnBM.addEventListener('click', openModalBM, { passive: true });

const closeModalBM = function () {
  modalBM.classList.add('is-hidden');
  overlayBM.classList.add('is-hidden');
};

closeModalBtnBM.addEventListener('click', closeModalBM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalBM.classList.contains('is-hidden')) {
      closeModalBM();
    }
  },
  { passive: true }
);
