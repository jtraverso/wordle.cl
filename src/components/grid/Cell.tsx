import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'

type Props = {
  value?: string
  status?: CharStatus
}

export const Cell = ({ value, status }: Props) => {
  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'bg-rose-500 dark:bg-rose-700 text-white border-rose-400 dark:border-rose-700':
        status === 'absent',
      'bg-emerald-400 dark:bg-emerald-600 text-white border-bg-emerald-400 dark:border-bg-emerald-600': status === 'correct',
      'bg-sky-500 dark:bg-sky-700 text-white border-bg-sky-500 dark:border-bg-sky-700': status === 'present',
      'cell-animation': !!value,
    }
  )

  return <div className={classes}>{value}</div>
}
