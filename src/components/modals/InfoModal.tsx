import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import {
  InformationCircleIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/outline'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

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
	  <br/>
	  <p className="text-base text-gray-900 font-meduim dark:text-gray-100">
	      Leyenda
      </p>
	  <div className="flex justify-left align-middle mb-1 mt-4 items-center">
	    <p className="text-sm text-gray-500 dark:text-gray-300">
          <InformationCircleIcon className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white" />
	        Despliega información sobre como jugar
	   </p>
	 </div>
	 <div className="flex justify-left align-middle mb-1 mt-4 items-center">
       <p className="text-sm text-gray-500 dark:text-gray-300">
          <ChartBarIcon className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white" />
	        Despliega estadísticas del juego
	   </p>
	 </div>
    </BaseModal>
    <div className="flex justify-left align-middle mb-1 mt-4 items-center">
       <p className="text-sm text-gray-500 dark:text-gray-300">
          <CogIcon className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white" />
	        Configuraciones del juego como modo fácil/difícil, modo claro/oscuro, modo normal/alto contraste.
	   </p>
	 </div>
    </BaseModal>
  )
}
