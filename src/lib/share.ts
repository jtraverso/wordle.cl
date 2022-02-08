import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE, GAME_URL } from '../constants/strings'
import { shareButtons } from './shareButtons'

const shareText = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n${GAME_URL}\n\n` +
      generateEmojiGrid(guesses)`
  )
}

//let const st = new shareButtons(GAME_URL , shareText)

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n${GAME_URL}\n\n` +
      generateEmojiGrid(guesses) + \n\n${st}`
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟦'
            default:
              return '🟥'
          }
        })
        .join('')
    })
    .join('\n')
}
