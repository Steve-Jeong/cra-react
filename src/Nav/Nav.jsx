import React from 'react'

function Nav({ list, onClick }) {
  let _list = null;
  _list = list.map((item) =>
    <li key={item.id}>
      <a id={item.id} href={'/data/' + item.id + item.title} onClick={(e) => {
        e.preventDefault()
        onClick(Number(e.target.id))
      }}>{item.title}</a>
    </li>)
  return (
    <div>
      <ol>
        {_list}
      </ol>
    </div>
  )
}

export default Nav