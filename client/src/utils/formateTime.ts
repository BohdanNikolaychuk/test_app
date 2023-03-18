import moment from 'moment'

export const formateDate = (date: string) => {
	return moment(date).fromNow()
}
