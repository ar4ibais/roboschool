const estates = () => {
    document.querySelector('.estates__i').addEventListener('click', () => {
        document.querySelector('.estates__popup').classList.toggle('show');
        document.querySelector('.estates__popup').classList.toggle('fade');
    });
};

export default estates;