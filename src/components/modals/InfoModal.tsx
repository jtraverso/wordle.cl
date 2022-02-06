import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}
  
 const adsenseHorizontalScript = `
 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2955738892636836" crossorigin="anonymous"></script>
    <!-- Wordle - Responsive - Horizontal -->
 <ins class="adsbygoogle"
   style="display:block"
   data-ad-client="ca-pub-2955738892636836"
   data-ad-slot="3599962958"
   data-ad-format="auto"
   data-full-width-responsive="true">
  </ins>
 <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>`
 adsenseHorizontalScript.async = true

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tienes 6 intentos para adivinar la palabra (incluye ciudades, comunas, modismos y otras expresiones y formas de hablar típicas chilenas ej: "PASAO en vez de PASADO").
        <br/>Después de cada intento cada celda cambiará según que tan cerca estuviste.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" status="correct" />
        <Cell value="H" />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra C está en la palabra y en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="L" />
        <Cell value="U" status="present" />
        <Cell value="G" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra U está en la palabra pero en el lugar incorrecto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="B" />
        <Cell value="A" />
        <Cell value="C" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra C no está en la palabra.
      </p>
    </BaseModal>
    document.body.appendChild(adsenseHorizontalScript)
  )
}
