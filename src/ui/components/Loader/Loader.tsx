import style from './Loader.module.scss'

export function Loader() {
    return (
        <div className={style.centeredLoader}>
            <div className={style.loader} />
        </div>
    )
}
