const singUpBtn = document.querySelector('#sign-up-btn')
const singInBtn = document.querySelector('#sign-in-btn')
const container = document.querySelector('.container')

singUpBtn.addEventListener('click', () => {
  container.classList.add('sign-up-mode')
})
singInBtn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode')
})


