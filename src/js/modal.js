(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[name="product-modal-open"]'),
    closeModalBtn: document.querySelector('[name="product-modal-close"]'),
    modal: document.querySelector('[name="product-modal-modal"]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
