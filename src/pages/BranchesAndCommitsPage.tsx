import { AsideLayout, Branches, Commits, Header } from '~/ui/components'
import { BranchContextProvider } from '~/contexts'

export function BranchesAndCommitsPage() {
  return (
    <>
      <BranchContextProvider>
        <Header />
        <AsideLayout sidebar={<Branches />}>
          <Commits />
        </AsideLayout>
      </BranchContextProvider>
    </>
  )
}
