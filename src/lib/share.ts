import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE, GAME_URL } from '../constants/strings'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n${GAME_URL}\n\n` +
      generateEmojiGrid(guesses)
  )
}

export const shareText = (guesses: string[], lost: boolean, game_title: string, game_url: string) => {
    return `${game_title} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n${game_url}\n` + generateEmojiGrid(guesses)
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
