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


forestCard.addEventListener('click', () => {
  toggleForestCard()
})

rainCard.addEventListener('click', () => {
  toggleForestCard()
})

cafeteriaCard.addEventListener('click', () => {
  toggleForestCard()
})

fireplaceCard.addEventListener('click', () => {
  toggleForestCard()
})
