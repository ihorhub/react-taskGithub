import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import FirstScrList from './FirstScrList'
import style from './screen.css'

export default function FirstScreen() {
  // const history = useHistory()
  const [searchName, setSearchName] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const [searchData, setSearchData] = useState([])
  console.log(isLoading)

  const changeHandler = (event) => {
    setSearchName(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    findUsers(e)
  }
  const findUsers = async () => {
    try {
      setIsLoading(true)
      await fetch(`https://api.github.com/search/users?q=${searchName}`)
        .then((res) => res.json())
        .then(({ items }) => setSearchData(items))
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }
  console.log(searchData)
  // useEffect(() => {
  //   findUser()
  // }, [])

  const LoadingIndicator = () => <div className={style.loading}>Loading...</div>
  // const onDetailClick = (itm) => {
  //   history.push(`/userDetails`, itm)
  // }
  return (
    <div>
      <h1>GitHub Searcher</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search name..."
            onChange={changeHandler}
          ></input>
        </form>
      </div>

      {isLoading || isLoading === null ? (
        LoadingIndicator()
      ) : (
        <FirstScrList items={searchData} />
      )}
    </div>
  )
}
