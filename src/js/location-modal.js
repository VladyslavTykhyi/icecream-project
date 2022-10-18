const modalLM = document.querySelector('[name="location-modal-modal"]');
const overlayLM = document.querySelector('[name="location-modal-overlay"]');
const openModalBtnLM = document.querySelector('[name="location-modal-open"]');
const closeModalBtnLM = document.querySelector('[name="location-modal-close"]');

const openModalLM = function () {
  modalLM.classList.remove('is-hidden');
  overlayLM.classList.remove('is-hidden');
};

openModalBtnLM.addEventListener('click', openModalLM, { passive: true });

const closeModalLM = function () {
  modalLM.classList.add('is-hidden');
  overlayLM.classList.add('is-hidden');
};

closeModalBtnLM.addEventListener('click', closeModalLM, { passive: true });

document.addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Escape' && !modalLM.classList.contains('is-hidden')) {
      closeModalLM();
    }
  },
  { passive: true }
);
