import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus, shareText } from '../../lib/share'
//import { solution } from '../../lib/words'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {InlineShareButtons} from 'sharethis-reactjs'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
  //CL_TEXT,
  //ABOUT_LINK,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  isHardMode: boolean
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
  isHardMode,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
	>
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
      <div>
	{/*
	<div className="mt-5 sm:mt-6 columns-1 dark:text-white">
	  <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
	    onClick={() => {
    		const url = ABOUT_LINK(solution)
    		window.open(url, '_blank')
             }}
          >
          {CL_TEXT(solution)}
          </button>
        </div>
	*/}
        <div className="mt-5 sm:mt-6 columns-2 dark:text-white">
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(guesses, isGameLost, isHardMode)
              handleShare()
            }}
          >
            {SHARE_TEXT}
          </button>
		</div>
		<div className="mt-5 sm:mt-6 columns-1 dark:text-white">
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
			//description: shareText(guesses, isGameLost, isHardMode),       // (defaults to og:description or twitter:description)
            title: 'Wordle.cl - Adivina la palabra en 6 intentos',            // (defaults to og:title or twitter:title)
          }}
        />
        </div>
	    </div>
      )}
    </BaseModal>
  )
}
