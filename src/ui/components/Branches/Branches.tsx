import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { For, Choose } from 'react-extras'
import { useParams } from 'react-router-dom'
import { getBranches } from '~/services'
import { BranchContext } from '~/contexts'
import style from './Branches.module.scss'

export function Branches() {
  const { changeRepositoryName, changeSha, changeUser } =
    useContext(BranchContext)
  const { user, repository } = useParams()
  const [selectedBranch, setSelectedBranch] = useState('')
  const [commitSha, setCommitSha] = useState('')

  const {
    data: branches,
    isSuccess: isBranchesSuccess,
    isLoading: isBranchesLoading,
    isError: isBranchesError,
    isFetched: isBranchesFetched,
  } = getBranches({
    user,
    repoName: repository
  })

  const handleBranchChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBranch(target.value)
  }

  useEffect(() => {
    if (branches?.length > 0) {
      const branch = branches?.find(item => {
        return item.name === selectedBranch
      })

      if (branch?.commit?.sha) setCommitSha(branch?.commit?.sha)
    }
  }, [selectedBranch, branches])

  useEffect(() => {
    if (user && repository) {
      changeRepositoryName(repository)
      changeSha(commitSha)
      changeUser(user)
    }
  }, [user, repository, commitSha])

  const hasBranchesAndIsSuccess =
    isBranchesFetched && isBranchesSuccess && branches.length > 0

  return (
    <div className={style.repositoryBranches}>
      <header>
        <h1>
          Branches do repositório <em>{repository}</em>
        </h1>
        <p className={style.explanation}>
          A branch padrão geralmente é <strong>main</strong> ou{' '}
          <strong>master</strong>
        </p>
      </header>
      <label>Selecione a branch e veja o histórico de commits</label>
      <Choose>
        <Choose.When condition={isBranchesLoading}>
          <p>Carregando branches...</p>
        </Choose.When>

        <Choose.When condition={isBranchesError}>
          <p style={{ color: '#b82725' }}>
            Infelizmente ocorreu um erro ao carregar as branches {':('}
          </p>
        </Choose.When>
        <Choose.When condition={hasBranchesAndIsSuccess}>
          <select defaultValue="branches" onChange={handleBranchChange}>
            <option value="branches" disabled>
              Selecione a branch...
            </option>
            <For
              of={branches}
              render={(branch, index) => {
                return (
                  <option key={`branch-${index}`} value={branch?.name}>
                    {branch?.name}
                  </option>
                )
              }}
            />
          </select>
        </Choose.When>
      </Choose>
    </div>
  )
}
