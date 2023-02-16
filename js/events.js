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

  function endToggleCards(){
    if(bgForestCard.classList.contains('activeBg')){
      toggleForestCard()
    }

    if(bgRainCard.classList.contains('activeBg')){
      toggleRainCard()
    }

    if(bgCafeteriaCard.classList.contains('activeBg')){
      toggleCafeteriaCard()
    }

    if(bgFireplaceCard.classList.contains('activeBg')){
      toggleFireplaceCard()
    }
  }

  let countDownTimer 

  function countDown(){
   
      countDownTimer = setTimeout(()=>{

      let minutesDisplay = Number(minutes.textContent)
      let secondsDisplay = Number(seconds.textContent)
      let isFinished = minutesDisplay <= 0 && secondsDisplay <= 0

      if(isFinished){
        Sounds.timeOff()
        updateTimerDisplay(minutesDisplay,secondsDisplay)
        endToggleCards()
        Sounds.stopCafeteriaSound()
        Sounds.stopFireplaceSound()
        Sounds.stopForestSound()
        Sounds.stopRainSound()
        return
      }

      if(secondsDisplay <= 0){
        secondsDisplay = 60
        --minutesDisplay
      }

      updateTimerDisplay(minutesDisplay, String(secondsDisplay - 1).padStart(2, "0"));

      
    countDown()

    },1000)

  }

  function updateTimerDisplay(minutesDisplay,secondsDisplay){
    minutes.innerText = String(minutesDisplay).padStart(2, "0");
    seconds.innerText = String(secondsDisplay).padStart(2, "0");
  }


  // Card events

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

  // Timer Events

  btnPlay.addEventListener('click', () => {
    countDown()
   
  })

  btnStop.addEventListener('click', () => {
    clearTimeout(countDownTimer)
    Sounds.stopCafeteriaSound()
    Sounds.stopFireplaceSound()
    Sounds.stopForestSound()
    Sounds.stopRainSound()
    endToggleCards()
   
    minutes.innerText = '25'
    seconds.innerText = '00'

  })

  btnPlus.addEventListener('click', () => {
    seconds.innerText = Number(seconds.innerText) + 5
    if(seconds.innerText >= 60){
      seconds.innerText = 0
      minutes.innerText = Number(minutes.innerText) + 1
    }
    updateTimerDisplay(minutes.innerText,seconds.innerText)
    
  })

  btnMinus.addEventListener('click', () => {
    seconds.innerText = Number(seconds.innerText) - 5
    if(seconds.innerText <= 0){
      seconds.innerText = 0
      minutes.innerText = Number(minutes.innerText) - 1
    }
    if(minutes.innerText < 0){
      minutes.innerText = 0
      seconds.innerText = 0
    }

    updateTimerDisplay(minutes.innerText,seconds.innerText)
  })

}