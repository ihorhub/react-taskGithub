import React from 'react'
import ScreenItem from './ScreenItem'

export default function FirstScrList({ items }) {
  return (
    <div>
      hello from first list screen
      {items.map((item) => (
        <ScreenItem {...item} key={item.id} />
      ))}
    </div>
  )
}
