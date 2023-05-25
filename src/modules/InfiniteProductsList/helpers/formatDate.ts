/* format string 'YYYY-MM-DD T hh:mm:ss' to hh:mm:ss DD-MM  */
export const formatDate = (str: string) => {
  const date = new Date(str.split(' ')[0]);

  const formatToDDMM = (date: Date) => {
    return date.toLocaleString(undefined, {month: '2-digit', day: '2-digit'})
  }
  return `${date.toLocaleTimeString()} ${formatToDDMM(date)}`
}