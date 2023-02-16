import { elements } from './elements.js'

import { Events } from './events.js'

import { sounds } from './sounds.js'


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
  btnMinus
})





