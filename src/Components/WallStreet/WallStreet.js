import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './WallStreet.css'

const WallStreet = () => {

  const [wallStreet,setWallStreet]=useState()

  const getWallStreet = async() =>{
    const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a81e8d9c4df8464b8431feb7d5fbc334"
    const response = await fetch(url)
    const responseJson = await response.json()
    setWallStreet(responseJson.articles)
    console.log(responseJson.articles)
  }

  useEffect(()=>{
    getWallStreet()
  },[])

  return (
    <div className='page_wallStreet'>

      {wallStreet && wallStreet.map((w)=>
      
      <div className="card">
      <img src={w.urlToImage} className="card-img-top" alt={w.title}/>
      <div className="card-body">
        <p className="card-text">{w.author}</p>
        <p className="card-text">{w.description}</p>
        <p className="card-text">{w.publishedAt}</p>
      </div>
    </div>
      
      
      
      )}

    </div>
  )
}

export default WallStreet