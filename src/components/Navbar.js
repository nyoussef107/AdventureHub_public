import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to ="/" className='navbar-logo'>
            T
            </Link>
        </div>

      </nav>
    </>
  )
}

export default navbar