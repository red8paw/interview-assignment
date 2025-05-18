const dateFormatter = new Intl.DateTimeFormat('en-SG', {
  weekday: 'long',
  month: 'short',
  day: '2-digit',
  year: '2-digit',
})

const timeFormatter = new Intl.DateTimeFormat('en-SG', {
  hour: '2-digit',
  minute: '2-digit',
})

export const formatDate = (date: Date): string => dateFormatter.format(date)
export const formatTime = (date: Date): string => timeFormatter.format(date)
