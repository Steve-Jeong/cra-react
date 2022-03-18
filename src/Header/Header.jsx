import React from 'react'

function Header({title, desc, onClick}) {
  return (
    <div>
      <h1><a href='/#' onClick={(e)=>{
        e.preventDefault();
        onClick();
      }}>{title}</a></h1>
      <p>{desc}</p>
    </div>
  )
}

export default Header