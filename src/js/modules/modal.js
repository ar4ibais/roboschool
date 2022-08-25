const modal = () => {
    const modalTriggers = document.querySelectorAll('[data-modal]'),
          modalCloseBtn = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal');

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('showModal');
        document.documentElement.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('showModal');
        modal.classList.remove('hide');
        document.documentElement.style.overflow = 'hidden';
    }

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('showModal')) {
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__overlay')) {
            closeModal();
        }
    });
    
};

export default modal;