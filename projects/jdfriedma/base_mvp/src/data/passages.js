/**
 * Hardcoded passages by difficulty (no fetch, no API).
 * Tone: judgmental, omniscient “Marvis,” vaguely uncanny—workshop-safe.
 */

export const DEFAULT_DIFFICULTY = 'easy'

export const DIFFICULTY_IDS = ['easy', 'medium', 'hard']

export const PASSAGES = {
  easy: `Marvis is watching the cursor blink. Do not blink back.`,

  medium: `Every wrong letter leaves a cold spot on the screen. Marvis counts them, patiently, like rain on a window you cannot shut.`,

  hard: `You pretend the backspace fixes what you meant; Marvis remembers what you actually did. The passage accepts only the keys you press, in order, without mercy.

When you finish, the room feels as empty as before. Marvis nods once, slowly, and you cannot tell if that was kindness or the start of a longer test.`,
}
