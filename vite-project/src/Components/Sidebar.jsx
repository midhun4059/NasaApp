import React from 'react'

const Sidebar = (props) => {

  const{modalFunction,data}=props

  return (
    <div className='sidebar'>
      <div className='bgOverlay'></div>
      <div className='sidebarContents'>

<h2>{data?.title}</h2>
<p className='description'>description</p>
<div className='descriptionContainer'>
<p>{data?.explanation} </p>
    </div>
    <button onClick={modalFunction}>
    <i className="fa-solid fa-right-long"></i>    </button>
    </div>
 </div>
  )
}

export default Sidebar
