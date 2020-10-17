(function () {
  const body = document.querySelector('body');
  const themeText = document.querySelector('.themeSwitch__wrapper>em');
  const themeSwitcher = document.querySelector('input[type=checkbox]');
  
  const toggleTheme = () => {
    if (body.classList.value === 'isLight') {
      body.classList.remove('isLight');
      body.classList.add('isDark');
    } else {
      body.classList.remove('isDark');
      body.classList.add('isLight');
    }
    
    if (themeText.textContent === "Light Mode") {
      themeText.textContent = "Dark Mode";
    } else {
      themeText.textContent = "Light Mode";
    }
    console.log(body.classList);
  };
  
  themeSwitcher.addEventListener('click', toggleTheme);
})()