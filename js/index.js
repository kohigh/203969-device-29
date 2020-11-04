const toggleSlide = (slidesContainerClass, toggles, event) => {
  let prevClickedNmbr, clickedNmbr

  for (let toggle of toggles) {
    if (toggle.classList.contains('toggle-current')) {
      prevClickedNmbr = toggle.dataset.id
      toggle.classList.remove('toggle-current')
      document.querySelector(`${slidesContainerClass} li:nth-child(${prevClickedNmbr})`).classList.remove('slide-current')
    }
  }

  clickedNmbr = event.target.dataset.id
  event.target.classList.add('toggle-current')
  document.querySelector(`${slidesContainerClass} li:nth-child(${clickedNmbr})`).classList.add('slide-current')
}

const recommendedToggles = document.querySelectorAll('.recommended-slider-controls .toggle')
const recommendedHandler = (event) => { toggleSlide('.recommended-list', recommendedToggles, event) }

for (let elem of recommendedToggles) {
  elem.addEventListener('click', recommendedHandler)
}

const advantagesToggles = document.querySelectorAll('.advantages-slider-controls .toggle')
const advantagesHandler = (event) => { toggleSlide('.advantages-definitions', advantagesToggles, event) }

for (let elem of advantagesToggles) {
  elem.addEventListener('click', advantagesHandler)
}

const showModal = (modal) => { modal.classList.add('modal-active') }

const contactButton = document.querySelector('.contacts .button')
const contactModal =  document.querySelector('.modal-contact')
contactButton.addEventListener('click', (e) => { showModal(contactModal) })

const mapButton = document.querySelector('.contact-us-container a')
const mapModal =  document.querySelector('.modal-map')
mapButton.addEventListener(
  'click',
  (e) => {
    e.preventDefault()
    showModal(mapModal)
  }
)

const closePopupButtons = document.querySelectorAll('.modal-close')
for (let close of closePopupButtons) {
  close.addEventListener(
    'click',
    (e) => { document.querySelector('.modal.modal-active').classList.remove('modal-active') }
  )
}
