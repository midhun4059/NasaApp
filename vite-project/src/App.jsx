import React, { useEffect, useState } from 'react'
import Main from './Components/Main'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'


const App = () => {
  const[data,setData]=useState(null)
  
  const[showModal,setShowModal]=useState(false)
  
  const handleToggleModel=()=>{
    setShowModal(!showModal)
  }
  
  useEffect(()=>{
  const nasaKey=import.meta.env.VITE_apiKey
const fetchApiData=async()=>{
  const url='https://api.nasa.gov/planetary/apod'+`?api_key=${nasaKey}`
  
  const today=(new Date()).toDateString();
const localKey=`NASA-${today}`
if(localStorage.getItem(localKey)){
  const apiData=JSON.parse(localStorage.getItem(localKey))
  setData(apiData)
  console.log('fetching from the local storage today');
   return
}
localStorage.clear()

try{
const res=await fetch (url)
const apiData=await res.json()
localStorage.setItem(localKey,JSON.stringify(apiData))
setData(apiData)
console.log('Feteched from API today');
}
catch(err){
console.log('error is',err.message)
}
}
fetchApiData()
},[])

  return (
    <>
    {data ? (<Main data={data} />):
     (<div className='loadingState'>
      <i className="fa-solid fa-gear"></i>
      </div>
    )}
     {showModal && (<Sidebar data={data} modalFunction={handleToggleModel} />)}

    {data && ( <Footer data={data} showModal={showModal} modalFunction={handleToggleModel} />
    )}
    </>
  )
}


export default App
