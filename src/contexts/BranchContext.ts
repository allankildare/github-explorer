import { createContext, Dispatch, SetStateAction } from 'react'

interface BranchContextProps {
    user: string
    repositoryName: string
    sha: string
    changeUser: Dispatch<SetStateAction<string>>
    changeRepositoryName: Dispatch<SetStateAction<string>>
    changeSha: Dispatch<SetStateAction<string>>
}

export const BranchContext = createContext<BranchContextProps>({
    user: '',
    repositoryName: '',
    sha: '',
    changeUser: () => 'not functional yet',
    changeRepositoryName: () => 'not functional yet',
    changeSha: () => 'not functional yet'
})
