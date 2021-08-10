import React from 'react'

export default function ScreenItem(item, onDetailClick) {
  return (
    <div>
      hello from screen item screen
      <div>
        {' '}
        <img src={item.avatar_url} alt="avatar" width="30px" height="40px" />
      </div>
      <h3>{item.login}</h3>
      <button onClick={() => onDetailClick(item)}>details</button>
    </div>
  )
}
