import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { GAME_TITLE, GAME_URL, HARD_MODE_TEXT  } from '../constants/strings'
import {InlineShareButtons} from 'sharethis-reactjs'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  navigator.clipboard.writeText(
    `${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n${GAME_URL}\n${ isHardMode ? HARD_MODE_TEXT : '' }
\n` + generateEmojiGrid(guesses)
  )
}

export const shareText = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
) => {
  return (
`${GAME_TITLE} ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n${GAME_URL}\n${ isHardMode ? HARD_MODE_TEXT : '' }
\n` + generateEmojiGrid(guesses)
  )
}

export const socialButtons = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean
  ) => {
  return (
    <InlineShareButtons
      config={{
      alignment: 'center',  // alignment of buttons (left, center, right)
      color: 'social',      // set the color of buttons (social, white)
      enabled: true,        // show/hide buttons (true, false)
      font_size: 16,        // font size for the buttons
      labels: 'cta',        // button labels (cta, counts, null)
      language: 'es',       // which language to use (see LANGUAGES)
      networks: [           // which networks to include (see SHARING NETWORKS)
        'whatsapp',
        'twitter',
	'reddit',
      ],
      padding: 12,          // padding within buttons (INTEGER)
      radius: 4,            // the corner radius on each button (INTEGER)
      show_total: true,
      size: 32,             // the size of each button (INTEGER)

      // OPTIONAL PARAMETERS
      url: shareText(guesses, isGameLost, isHardMode), // (defaults to current url)
      //image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
      //description: shareText(guesses, lost, isHardMode),       // (defaults to og:description or twitter:description)
      title: 'Wordle.cl - Adivina la palabra en 6 intentos',            // (defaults to og:title or twitter:title)
    }}
    />
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
