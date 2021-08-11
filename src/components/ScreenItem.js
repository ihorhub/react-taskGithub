import React from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
// import SecondScreen from './SecondScreen'
// import { NavLink } from 'react-router-dom'
import './screen.css'
export default function ScreenItem({ item }) {
  // console.log(item)
  const match = useRouteMatch()
  const params = useParams()

  // const [repoData, setRepoData] = useState([])

  const onDetailClick = () => {
    console.log(match, 'match')
    console.log(params, 'params')
  }

  // const findUser = async () => {
  //   try {
  //     await fetch(`https://api.github.com/user?q=${repoData}`)
  //       .then((res) => res.json())
  //       .then(({ items }) => setRepoData(items))
  //   } catch (e) {
  //     console.error(e)
  //   } finally {
  //   }
  // }
  return (
    <div>
      <div className="firstScreen">
        <div>
          <img src={item.avatar_url} alt="avatar" width="40px" height="30px" />
        </div>
        <h5> UserName: {item.login}</h5>

        <button className="c-button" onClick={() => onDetailClick(params)}>
          details
        </button>
      </div>
      <hr></hr>

      {/* <SecondScreen onDetailClick={onDetailClick} item={item} /> */}
    </div>
  )
}
