import { useContext, useEffect } from 'react'
import { Choose, For } from 'react-extras'
import { BranchContext } from '~/contexts'
import { getCommits } from '~/services'
import { Alert } from '../Alert'
import { CommitCard } from '../CommitCard'
import { Loader } from '../Loader'
import style from './Commits.module.scss'

export function Commits() {
  const { user, repositoryName, sha } = useContext(BranchContext)

  const {
    data: commits,
    isSuccess: isCommitsSuccess,
    isLoading: isCommitsLoading,
    isError: isCommitsError,
    isFetched: isCommitsFetched,
    refetch: refetchCommits,
  } = getCommits({
    user,
    repoName: repositoryName,
    commitSha: sha,
  })

  useEffect(() => {
    if(sha || sha !== '') refetchCommits()
  }, [sha])

  const hasCommits = isCommitsSuccess && isCommitsFetched && commits?.length > 0 && Boolean(sha)

  return (
    <section className={style.commitsSection}>
      <Choose>
        <Choose.When condition={isCommitsLoading}>
          <Loader />
        </Choose.When>
        <Choose.When condition={isCommitsError || !isCommitsFetched}>
          <Alert
            type="Commits não encontrados 😕"
            message="Por favor, tente novamente ou vá para outra branch"
          />
        </Choose.When>
        <Choose.When condition={hasCommits}>
          <h1>Commits</h1>
          <For
            of={commits}
            render={(commit, index) => {
              return (
                <CommitCard
                  key={`commit-${index}`}
                  message={commit?.commit?.message}
                  author={commit?.commit?.author?.name}
                  email={commit?.commit?.author?.email}
                  date={commit?.commit?.author?.date}
                />
              )
            }}
          />
        </Choose.When>
        <Choose.Otherwise>
          <h1>Aqui irão aparecer os commits...</h1>
        </Choose.Otherwise>
      </Choose>
    </section>
  )
}
