export function Events({
  forestCard,
  rainCard,
  cafeteriaCard,
  fireplaceCard,
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath,
  Sounds,
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus
}){

  function toggleForestCard(){
    bgForestCard.classList.toggle('activeBg')
    forestCardPath.classList.toggle('activePath')
  }

  function toggleRainCard(){
    bgRainCard.classList.toggle('activeBg')
    rainCardPath.classList.toggle('activePath')
  }

  function toggleCafeteriaCard() {
    bgCafeteriaCard.classList.toggle('activeBg')
    cafeteriaCardPath.classList.toggle('activePath')
  }

  function toggleFireplaceCard() {
    bgFireplaceCard.classList.toggle('activeBg')
    fireplaceCardPath.classList.toggle('activePath')
  }


  forestCard.addEventListener('click', () => {
    toggleForestCard()
    if(bgForestCard.classList.contains('activeBg')){
      Sounds.playForestSound()
    }else {
      Sounds.stopForestSound()
    }  
  })

  rainCard.addEventListener('click', () => {
    toggleRainCard()
    if(bgRainCard.classList.contains('activeBg')){
      Sounds.playRainSound()
    }else{
      Sounds.stopRainSound()
    }

  })

  cafeteriaCard.addEventListener('click', () => {
    toggleCafeteriaCard()
    if(bgCafeteriaCard.classList.contains('activeBg')){
      Sounds.playCafeteriaSound()
    }else {
      Sounds.stopCafeteriaSound()
    }
   
  })

  fireplaceCard.addEventListener('click', () => {
    toggleFireplaceCard()
    if(bgFireplaceCard.classList.contains('activeBg')){
      Sounds.playFireplaceSound()
    }else {
      Sounds.stopFireplaceSound()
    }
   
  })

}