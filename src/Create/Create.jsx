import React from 'react'

function Create({onSubmit}) {
  return (
    <div>
      <form method='post' action='/create' onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(e.target.title.value, e.target.desc.value)
      }}>
        <h2>Create</h2>
        <p>
          <input type='text' placeholder='title' name='title'></input>
        </p>
        <p>
          <textarea placeholder='description' name='desc'></textarea>
        </p>
        <p>
          <input type='submit'></input>
        </p>
      </form>
    </div>
  )
}

export default Create