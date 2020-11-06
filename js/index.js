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

function validateInput(input, msg) {
  if (!input.value) {
    input.setCustomValidity(msg)
  } else {
    input.setCustomValidity("")
  }
}

const contactForm = document.querySelector('.form-contact')
const submitButton = document.querySelector('.button-contact')
const nameInput = document.querySelector('input[name=name]')
const emailInput = document.querySelector('input[name=email]')
const letterInput = document.querySelector('textarea[name=cover-letter]')

submitButton.addEventListener(
  'click',
  (e) => {
    validateInput(nameInput, "Накарябай имя, будь-ласочка!")
    validateInput(emailInput, "А тут емэйлик!")
    validateInput(letterInput, "Ну и причина обращения какая, неплохо бы установить!")

    if (contactForm.checkValidity()) {
      contactModal.classList.remove('modal-error')
    } else {
      contactModal.classList.add('modal-error')
    }

    setTimeout(() => { contactModal.classList.remove('modal-error') }, 100)
  }
)
