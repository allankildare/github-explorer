import { If } from "react-extras"
import style from './Alert.module.scss'

interface AlertProps {
    type?: string
    message: string
}
export function Alert({ type, message }: AlertProps) {
    return (
        <div className={style.centeredAlert}>
            <div className={style.alert}>
                <If condition={Boolean(type)}>
                    <h1>{type}</h1>
                </If>
                <p>{message}</p>
            </div>
        </div>
    )
}
