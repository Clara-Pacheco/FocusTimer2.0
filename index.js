const forestCard = document.querySelector('.forest')
const rainCard = document.querySelector('.rain')
const cafeteriaCard = document.querySelector('.cafeteria')
const fireplaceCard = document.querySelector('.fireplace')

function toggleForestCard(){
  const forestCardContainer = document.querySelector('#icon-forest') // icon-container
  const bgForestCard = document.querySelector('#bg-icon-forest')  // icon-background
  const forestCardPath = document.querySelector('#path-icon-forest') // icon-drawing

  bgForestCard.classList.toggle('activeBg')
  forestCardPath.classList.toggle('activePath')
}

function toggleRainCard(){
  const bgRainCard = document.querySelector('#bg-icon-rain')  // icon-background
  const rainCardPath = document.querySelector('#path-icon-rain') // icon-drawing

  bgRainCard.classList.toggle('activeBgRain')
  rainCardPath.classList.toggle('activePathRain')
}

function toggleCafeteriaCard() {
  const bgCafeteriaCard = document.querySelector('#bg-icon-cafeteria')  // icon-background
  const cafeteriaCardPath = document.querySelector('#path-icon-cafeteria') // icon-drawing

  bgCafeteriaCard.classList.toggle('activeBg')
  cafeteriaCardPath.classList.toggle('activePath')
}

function toggleFireplaceCard() {
  const bgFireplaceCard = document.querySelector('#bg-icon-fireplace')  // icon-background
  const fireplaceCardPath = document.querySelector('#path-icon-fireplace') // icon-drawing

  bgFireplaceCard.classList.toggle('activeBg')
  fireplaceCardPath.classList.toggle('activePath')
}


forestCard.addEventListener('click', () => {
  toggleForestCard()
})

rainCard.addEventListener('click', () => {
  toggleRainCard()
})

cafeteriaCard.addEventListener('click', () => {
  toggleCafeteriaCard()
})

fireplaceCard.addEventListener('click', () => {
  toggleFireplaceCard()
})
