import React, { useState } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import style from './screen.css'

export default function SecondScreen({ item }, onDetailClick) {
  const [repo, setRepo] = useState('')
  const [repoData, setRepoData] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const match = useRouteMatch
  const params = useParams
  console.log(match, 'match')
  console.log(params, 'params')
  console.log(item)

  onDetailClick = () => {
    findUser()
  }

  const findUser = async () => {
    try {
      setIsLoading(true)
      await fetch(`https://api.github.com/user?q=${repoData}`)
        .then((res) => res.json())
        .then(({ items }) => setRepoData(items))
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }
  const LoadingIndicator = () => <div className={style.loading}>Loading...</div>
  const changeHandler = (e) => {
    setRepo(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getRepo()

    //todo fetch --repositor to git
  }

  const getRepo = async () => {
    // const data=await fetch(''${}).then(res=>res.json())
    setRepoData()
  }
  console.log(repo)
  console.log(repoData)

  return (
    <div>
      hello from second page
      {isLoading || isLoading === null ? (
        LoadingIndicator()
      ) : (
        <div>
          <div>
            <a href={item.html_url} target="_blank" rel="noreferrer">
              <img
                src={item.avatar_url}
                alt="avatar"
                width="120px"
                height="90px"
              />
            </a>
          </div>
          <div>
            <ul>
              <li>UserName:{item.login}</li>
              <li>Email</li>
              <li>Location</li>
              <li> Date</li>
              <li> 8 followers</li>
              <li> Following</li>
            </ul>
            <NavLink to={'/users'}>
              <button>back</button>
            </NavLink>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search Repositories..."
                onChange={changeHandler}
              />
            </form>
          </div>
        </div>
      )}
      {/* <SecondScrList /> */}
    </div>
  )
}
