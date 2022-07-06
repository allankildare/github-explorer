import { useState } from 'react'
import { BranchContext } from './BranchContext'

export function BranchContextProvider({ children }: any) {
    const [user, changeUser] = useState('')
    const [repositoryName, changeRepositoryName] = useState('')
    const [sha, changeSha] = useState('')

    return (
        <BranchContext.Provider value={{ user, repositoryName, sha, changeUser, changeRepositoryName, changeSha }}>
            {children}
        </BranchContext.Provider>
    )
}
