import React from 'react'
import './AppleNews.css'
import { useEffect } from 'react'
import { useState } from 'react'
import './AppleNews.css'


const AppleNews = () => {

  const [apple,setApple] = useState()

const getAppleNews = async()=>{
  const url = 'https://newsapi.org/v2/everything?q=apple&from=2022-04-24&to=2022-04-24&sortBy=popularity&apiKey=a81e8d9c4df8464b8431feb7d5fbc334'

  const response = await fetch(url)
  const responseJson = await response.json()
    setApple(responseJson.articles)
  
}

useEffect(()=>{
  getAppleNews()
},[])

  return (

    <div className='page_apple'>
   

    {apple && apple.map((a)=>
 
    
    <div className="card">
  <img src={a.urlToImage} className="card-img-top" alt={a.title}/>
  <div className="card-body">
    <p className="card-text">{a.author}</p>
    <p className="card-text">{a.description}</p>
    <p className="card-text">{a.publishedAt}</p>
  </div>
</div>

    
    

    )}

      

    </div>
  
  )
}

export default AppleNews