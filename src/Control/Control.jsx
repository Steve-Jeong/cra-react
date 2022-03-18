import React from 'react'

function Control({ onClick }) {
  return (
    <div>
      <a href='/create' onClick={(e) => {
        e.preventDefault()
        onClick('create')
      }}>create</a>
      <a href='/update' onClick={(e) => {
        e.preventDefault()
        onClick('update')
      }}>update</a>
      <input type='button' value='delete' onClick={(e) => {
        e.preventDefault()
        onClick('delete')
      }}></input>
    </div>
  )
}

export default Control