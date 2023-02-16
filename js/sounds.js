export function sounds () {
  const cafeteriaSound = new Audio('assets/sounds/Cafeteria.wav')
  const rainSound = new Audio('assets/sounds/Chuva.wav')
  const forestSound = new Audio('assets/sounds/Floresta.wav')
  const fireplaceSound = new Audio('assets/sounds/Lareira.wav')

  cafeteriaSound.loop = true
  rainSound.loop = true
  forestSound.loop = true
  fireplaceSound.loop = true

  function playCafeteriaSound(){
    cafeteriaSound.play()
  }

  function stopCafeteriaSound(){
    cafeteriaSound.pause()
  }

  function playRainSound(){
    rainSound.play()
  }

  function stopRainSound(){
    rainSound.pause()
  }

  function playForestSound(){
    forestSound.play()
  }

  function stopForestSound(){
    forestSound.pause()
  }

  function playFireplaceSound(){
    fireplaceSound.play()
  }

  function stopFireplaceSound(){
    fireplaceSound.pause()
  }

  return {
    playCafeteriaSound,
    stopCafeteriaSound,
    playRainSound,
    stopRainSound,
    playForestSound,
    stopForestSound,
    playFireplaceSound,
    stopFireplaceSound
  }



}