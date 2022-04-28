import React from 'react'
import './TechCrunch.css'
import { useState } from 'react'
import { useEffect } from 'react'

const TechCrunch = () => {

  const [techCrunch,setTechCrunch] = useState()

const getTeslaNews = async () =>{
  const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a81e8d9c4df8464b8431feb7d5fbc334'

  const response = await fetch(url)
  const responseJson = await response.json()

  setTechCrunch(responseJson.articles)
}

useEffect(()=>{
  getTeslaNews()
},[])
  return (

  
 
    <div className='page_techCrunch'>

    {techCrunch && techCrunch.map((t)=>
 
    
 <div className="card" >
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

export default TechCrunch