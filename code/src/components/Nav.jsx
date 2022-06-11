import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:"10px"}}>
        <Link  to="/">Kaguya</Link>
        <Link to="hayasaka">Hayasaka</Link>
    </div>
  )
}

export default Nav