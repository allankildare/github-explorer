import style from './AsideLayout.module.scss'

export function AsideLayout({ sidebar, children }: { sidebar: JSX.Element, children: JSX.Element }) {
    return (
        <div className={style.asideLayout}>
            <aside>{sidebar}</aside>
            {children}
        </div>
    )
}
