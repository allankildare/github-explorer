import { If } from 'react-extras'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import style from './CommitCard.module.scss'
import { capitalizeFirstLetter } from '~/helpers'

interface CommitCardProps {
    message?: string
    author: string
    email: string
    date: string
}

dayjs.extend(relativeTime)

export function CommitCard({ author, date, email, message }: CommitCardProps) {
    const formattedDate = capitalizeFirstLetter(dayjs(date).fromNow())
    const calendarDate = dayjs(date).format('DD/MM/YYYY')

    return (
        <div className={style.commitCard}>
            <If condition={Boolean(message)}>
                <h2 title={message}>{message}</h2>
            </If>
            <div className={style.date} title={calendarDate}>{formattedDate}</div>
            <p>Autor: <b>{author}</b></p>
            <p>E-mail: <em>{email}</em></p>
        </div>
    )
}
