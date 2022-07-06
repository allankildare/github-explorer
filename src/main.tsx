import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import './index.css'
import { queryClient } from './clients'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from '~/ui/components'
import { BranchesAndCommitsPage, RepositoriesPage } from '~/pages'

// dayjs config to brazilian portuguese
dayjs.locale('pt-br')

const rootElement = document.getElementById('root')

if(rootElement)
ReactDOM.createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:user" element={<RepositoriesPage />} />
        <Route path="/:user/:repository" element={<BranchesAndCommitsPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
