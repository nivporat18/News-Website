import React from 'react'
import './TopBusiness.css'
import { useEffect } from 'react'
import { useState } from 'react'

const TopBusiness = () => {

  const [topBusiness,setTopBusiness] = useState()


  const getTopBusiness = async () =>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a81e8d9c4df8464b8431feb7d5fbc334'
    const response = await fetch(url)
    const responseJson = await response.json()
    setTopBusiness(responseJson.articles)
  }

  useEffect(()=>{
    getTopBusiness()
  },[])

  return (

    <div className='page_business'>
   

    {topBusiness && topBusiness.map((t)=>
  

   
    <div className="card">
  <img src={t.urlToImage} className="card-img-top" alt={t.title}/>
  <div className="card-body">
    <p className="card-text">{t.author}</p>
    <p className="card-text">{t.description}</p>
    <p className="card-text">{t.publishedAt}</p>
  </div>
</div>

    
    

    
    )}
</div>

  )
}

export default TopBusiness