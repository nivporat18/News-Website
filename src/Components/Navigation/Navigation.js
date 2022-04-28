import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='page_navigation'>
      
      <h1 className="title_navigation">News Website</h1>

    
      <div className="links_navigation">
      <Link to="/apple-news">Apple</Link>
      <Link to="/tech-crunch">Tech Crunch</Link>
      <Link to="/top-business">Top Business</Link>
      <Link to="/wall-street">Wall Street </Link>
      </div>
      

    </div>
  )
}

export default Navigation