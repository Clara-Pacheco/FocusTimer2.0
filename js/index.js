import { elements } from './elements.js'

import { Events } from './events.js'

import { sounds } from './sounds.js'

import { Controls } from './controls.js'  

const {
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
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus
} = elements 

const Sounds = sounds()

const controls = Controls({
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath
})

Events({
  forestCard,
  rainCard,
  cafeteriaCard,
  fireplaceCard,
  Sounds,
  bgForestCard,
  forestCardPath,
  bgRainCard,
  rainCardPath,
  bgCafeteriaCard,
  cafeteriaCardPath,
  bgFireplaceCard,
  fireplaceCardPath,
  minutes,
  seconds,
  btnPlay,
  btnStop,
  btnPlus,
  btnMinus,
  controls
})







