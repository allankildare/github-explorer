import { Choose } from 'react-extras'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import style from './Header.module.scss'

export function Header() {
  const { user, repository } = useParams()

  return (
    <header className={style.header}>
    <div className={style.responsiveMenu}>
      <nav>
        <Choose>
          <Choose.When condition={Boolean(user && !repository)}>
            <Link to="/">
              <button title="Voltar à página anterior">
                <AiOutlineArrowLeft color="white" size="1.5rem" />
              </button>
            </Link>
          </Choose.When>
          <Choose.When condition={Boolean(user && repository)}>
            <Link to={`/${user}`}>
              <button title="Voltar à página anterior">
                <AiOutlineArrowLeft color="white" size="1.5rem" />
              </button>
            </Link>
          </Choose.When>
        </Choose>
      </nav>
      <div>
        <h1 className={style.title}>GitHub Explorer</h1>
      </div>
      <nav>
        <Link to="/">Pesquisar outro usuário</Link>
      </nav>
      </div>
    </header>
  )
}
