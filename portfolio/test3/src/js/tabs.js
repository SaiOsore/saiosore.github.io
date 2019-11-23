(() => {

  const tabNav = document.querySelectorAll('.works__link'),
        tabContent = document.querySelectorAll('.works__img');

  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener('mouseover', selectTabNav);
    item.addEventListener('click', selectTabNav);
    item.addEventListener('mouseout', deselectTabNav);
    item.addEventListener('mouseout', deselectTabContent);
  });

  function selectTabNav() {
    tabName = this.getAttribute('data-tab');
    selectTabContent(tabName);
    tabNav.forEach((item) => {
      if (item.dataset.tab === tabName) {
        item.style.zIndex = '4';
        item.style.opacity = '1';
      } else {
        item.style.opacity = '.5';
        item.style.zIndex = '0';
      }
    });
  }

  function selectTabContent(tab) {
    tabContent.forEach((item) => {
      if (item.dataset.tab === tab) {
        item.classList.add('works__img--active');
      } else {
        item.classList.remove('works__img--active');
      }
    });
  }

  function deselectTabContent() {
    tabContent.forEach((item) => {
      item.classList.remove('works__img--active');
    });
  }

  function deselectTabNav() {
    tabNav.forEach((item) => {
      item.style.opacity = '1';
    });
  }

})();