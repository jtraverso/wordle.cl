export const GAME_TITLE = 'WORDLE.CL'
export const GAME_URL = 'https://www.wordle.cl'
export const WIN_MESSAGES = ['¡Excelente!', '¡Increible!', '¡Bien Hecho!', '¡Eres Formidable!', '¡Sec@!','¡Bakan!','¡La Raja!','¡Impresionante','¡Te Pasaaaaaaste!' ]
export const GAME_COPIED_MESSAGE = 'Copiado al portapeles'
export const ABOUT_GAME_MESSAGE = 'Sobre wordle.cl'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  '¡El modo difícil solo puede activarse al inicio!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Debes usar la letra ${guess} en la posición ${position}`
 export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `La palabra debe contener la letra ${letter}`
export const ENTER_TEXT = 'Enviar'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Tus estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Tu distribución'
export const NEW_WORD_TEXT = 'Nueva palabra en'
export const SHARE_TEXT = 'COPIAR RESULTADO'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const SUCCESS_RATE_TEXT = 'Tasa de éxito'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
export const HOW_TO_PLAY_TEXT = 'Como jugar'
export const HARD_MODE_TEXT = '* Modo díficil activado'
