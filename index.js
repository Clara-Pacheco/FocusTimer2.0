import { elements } from './js/elements.js'

import { Events } from './js/events.js'

import { sounds } from './js/sounds.js'

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
  fireplaceCardPath
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
  fireplaceCardPath
})



