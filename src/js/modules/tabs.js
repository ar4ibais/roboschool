const tabsFunction = () => {
    const tabs = document.querySelectorAll('.modal__tab'),
          tabsContent = document.querySelectorAll('.modal__content'),
          tabsParent = document.querySelector('.modal__tabs');

    function hideTabsContent() {
        tabs.forEach(tab => {
            tab.classList.remove('modal__tab--active');
        });
        tabsContent.forEach(tabContent => {
            tabContent.classList.add('hide');
            tabContent.classList.remove('show', 'fade');
        });
    }

    function showTabsContent(i = 0) {
        tabs[i].classList.add('modal__tab--active');

        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
    }

    hideTabsContent();
    showTabsContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('modal__tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
};

export default tabsFunction;