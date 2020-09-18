const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.theme-switcher');

const toggleTheme = () => {
  if (body.classList.value === 'isLight') {
    body.classList.remove('isLight');
    body.classList.add('isDark');
  } else if (body.classList.value === 'isDark') {
    body.classList.remove('isDark');
    body.classList.add('isLight');
  }
};

themeSwitcher.addEventListener('click', toggleTheme);