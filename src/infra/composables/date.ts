import { format, parseISO } from 'date-fns'

const useDate = () => {
  const formatDate = (date: string, dateFormat: string = 'dd-MM-yyyy' ) => {
    return format(parseISO(date), dateFormat)
  }

  return {
    formatDate
  }
}

export default useDate
