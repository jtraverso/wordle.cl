import { InlineShareButtons } from 'sharethis-reactjs'
import { shareText } from '../../lib/share'

type Props = {
  guesses: string[]
  isGameLost: boolean
  isHardMode: boolean
}

export const SocialButtons = ({ guesses, isGameLost, isHardMode  }: Props) => {
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
      title: 'Wordle.cl - Adivina la palabra en 6 intentos'            // (defaults to og:title or twitter:title)
    }}
    />
  )
}