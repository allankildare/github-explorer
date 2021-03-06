import { If } from 'react-extras'
import { Link, useParams } from 'react-router-dom'
import style from './RepoCard.module.scss'

interface RepoCardProps {
  name: string
  description: string
  url: string
  language: string
}

export function RepoCard(props: RepoCardProps) {
  const { name, description, url, language } = props
  const { user } = useParams()

  return (
    <div className={style.repoCard}>
      <div className={style.info}>
        <a href={url} target="_blank" rel="noreferrer">
          <h1>{name}</h1>
        </a>
        <If condition={Boolean(description)}>
          <h2>{description}</h2>
        </If>
        <If condition={Boolean(language)}>
          <span>
            Principal linguagem: <strong>{language}</strong>
          </span>
        </If>
      </div>
      <div className={style.showBranches}>
        <Link to={`/${user}/${name}`}>
          <button>Ver branches</button>
        </Link>
      </div>
    </div>
  )
}
