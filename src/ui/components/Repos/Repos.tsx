import { useParams } from 'react-router-dom'
import { Choose, For } from 'react-extras'
import { getRepos } from '~/services'
import { RepoCard } from './../RepoCard'
import style from './Repos.module.scss'
import { Loader } from '../Loader'
import { Alert } from '../Alert'

export function Repos() {
  const { user } = useParams()

  const {
    data: repositories,
    isSuccess: isReposSuccess,
    isLoading: isReposLoading,
    isError: isReposError,
    isFetched: isReposFetched,
  } = getRepos(user)

  const isReposEmpty = repositories?.length === 0
  const hasRepositories =
    !isReposEmpty && isReposSuccess && isReposFetched && Boolean(user)

  return (
    <section className={style.repositoriesSection}>
      <Choose>
        <Choose.When condition={isReposLoading}>
          <Loader />
        </Choose.When>
        <Choose.When condition={isReposError}>
          <Alert
            type="Não encontramos repositórios"
            message="Infelizmente ocorreu um erro durante a busca dos repositórios deste usuário, tente novamente mais tarde"
          />
        </Choose.When>
        <Choose.When condition={isReposEmpty}>
          <Alert
            type="Não encontramos repositórios"
            message="Parece que este usuário não tem repositórios..."
          />
        </Choose.When>
        <div className={style.repositories}>
          <Choose.When condition={hasRepositories}>
            <For
              of={repositories}
              render={(repo: any) => {
                return (
                  <RepoCard
                    key={repo?.id}
                    user={user}
                    name={repo?.name}
                    description={repo?.description}
                    url={repo?.html_url}
                    defaultBranch={repo?.default_branch}
                    branchesUrl={repo?.branches_url}
                    language={repo?.language}
                  />
                )
              }}
            />
          </Choose.When>
        </div>
      </Choose>
    </section>
  )
}
