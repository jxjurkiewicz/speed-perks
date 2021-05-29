document.addEventListener('DOMContentLoaded', (event) => {
  let isMenuOpen = false

  const body = document.querySelector('body')
  const headerMobile = document.querySelector('#headerMobile')
  const menuHamburger = document.querySelector('#headerMobileButton')
  const menuMobile = document.querySelector('#menuMobile')
  const submenuBackButton = document.querySelector('#submenuBack')
  const submenuTitle = document.querySelector('#submenuTitle')

  function hideSubmenu () {
    menuMobile.querySelectorAll('.submenu').forEach(submenu => {
      submenu.classList.remove('active')
      headerMobile.classList.remove('submenu-active')
    })
    submenuTitle.innerHTML = ''
  }

  menuHamburger.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen
    if (isMenuOpen) {
      body.style.overflow = 'hidden'
      headerMobile.classList.add('active')
      menuMobile.classList.add('active')
    } else {
      body.style.overflow = 'auto'
      headerMobile.classList.remove('active')
      menuMobile.classList.remove('active')
      hideSubmenu()
    }
  })

  submenuBackButton.addEventListener('click', hideSubmenu)

  menuMobile.querySelectorAll('.submenu').forEach(submenu => {
    const aButton = submenu.parentElement.querySelector('a')
    aButton.addEventListener('click', (event) => {
      event.preventDefault()
      submenuTitle.innerHTML = aButton.innerHTML
      submenu.classList.add('active')
      headerMobile.classList.add('submenu-active')
    })
  })


})