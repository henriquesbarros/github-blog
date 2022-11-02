import moment from 'moment'

export function relativeDateFormmater(date: string) {
  return moment(date).fromNow()
}
