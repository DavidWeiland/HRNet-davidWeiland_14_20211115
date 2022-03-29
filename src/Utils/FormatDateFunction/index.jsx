export const formatDate = (dateStr) => {
    if (dateStr) {
      const date = new Date(dateStr)
      const day = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
      const month = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(date)
      const year = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
      return `${month}/${day}/${year}`
    }
}
