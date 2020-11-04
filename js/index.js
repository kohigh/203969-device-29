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
