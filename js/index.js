const toggleSlide = (slidesContainerClass, btns, event) => {
  let prevClickedNmbr, clickedNmbr

  for (let elem of btns) {
    if (elem.classList.contains('toggle-current')) {
      prevClickedNmbr = elem.dataset.id
      elem.classList.remove('toggle-current')
      document.querySelector(`${slidesContainerClass} li:nth-child(${prevClickedNmbr})`).classList.remove('slide-current')
    }
  }

  clickedNmbr = event.target.dataset.id
  event.target.classList.add('toggle-current')
  document.querySelector(`${slidesContainerClass} li:nth-child(${clickedNmbr})`).classList.add('slide-current')
}

const slider = document.querySelector('.recommended-slider-controls')
const recommendedToggles = document.querySelectorAll('.recommended-slider-controls button')
const recommendedHandler = (event) => { toggleSlide('.recommended-list', recommendedToggles, event) }

for (let elem of recommendedToggles) {
  elem.addEventListener('click', recommendedHandler)
}
