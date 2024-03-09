(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }

  refs.backdrop.addEventListener('click', function (event) {
    if (!event.target.classList.contains('backdrop')) return;
    closeModal();
  });

  refs.body.addEventListener(
    'keyup',
    function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    false
  );
})();
