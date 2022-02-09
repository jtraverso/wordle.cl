import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Sobre Wordle.cl" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Este juego es Open Source -{' '}
        <a
          href="https://github.com/jtraverso/wordle.cl"
          className="underline font-bold"
        >
          revisa el código aquí
        </a>{' '}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
       Basado en -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          revisa el código aquí
        </a>{' '}
      </p>
    </BaseModal>
  )
}
