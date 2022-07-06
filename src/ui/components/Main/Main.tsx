import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import './Main.scss'

export function Main() {
  const [user, setUser] = useState('')
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    const { value } = target
    setUser(value)
  }

  const handleKeyDown = ({ keyCode, key }) => {
    if (keyCode === 13 || key === 'Enter') navigate(`/${user}`)
  }

  return (
    <main className="intro">
      <h1>Olá, vamos explorar o GitHub?</h1>
      <label>Digite o nome de um usuário do GitHub</label>
      <div className="search">
        <input
          type="text"
          placeholder="Nome de usuário..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Link to={`/${user}`}>
          <button>
            <AiOutlineSearch color="rgb(20, 20, 20)" />
          </button>
        </Link>
      </div>
      <span>
        Não tem ideia? Tente o do desenvolvedor desta aplicação,{' '}
        <Link to="/allankildare">Allan Kildare</Link>
      </span>
    </main>
  )
}
