import PptxGenJS from 'pptxgenjs'

import { buildDeckPresentation } from './cursor_101_slides/src/slide-system/renderers/pptx.js'
import { deckSlides } from './cursor_101_slides/src/slide-system/slides.js'

const fileName = 'cursor-101-slides.pptx'
const pres = buildDeckPresentation(PptxGenJS, deckSlides)

console.log(`Rendering ${deckSlides.length} native slides to ${fileName}`)
await pres.writeFile({ fileName })
console.log(`Created ${fileName}`)
