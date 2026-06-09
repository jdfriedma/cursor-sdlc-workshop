/**
 * Header taglines — short, creepy omniscient Marvis voice (workshop-safe).
 * Rotated when the user starts a new run after finishing or changes difficulty.
 */

export const TAGLINE_POOL = [
  'Retype the passage. Marvis is watching.',
  'Marvis is watching the cursor blink. Do not blink back.',
  'Your keys click louder when you are guessing. Marvis turns up the volume.',
  'The tab key cannot save you here. Only honest fingers can.',
  'Blink if you are ready. Marvis blinks slower, and never first.',
  'Type what you see. Marvis sees what you type.',
  'The passage is fixed. Your mistakes are not.',
  'Marvis has read this paragraph before. Marvis will read it again.',
  'Every keystroke is a small confession. Marvis takes notes.',
  'Do not look at the clock. Marvis is already counting.',
]

/**
 * @returns {string}
 */
export function pickRandomTagline() {
  const idx = Math.floor(Math.random() * TAGLINE_POOL.length)
  return TAGLINE_POOL[idx]
}
