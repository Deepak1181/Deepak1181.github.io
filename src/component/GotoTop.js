import React from 'react'

const GotoTop = () => {
     const goToBtn=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
     }
  return (
    <div className="top-btn" onClick={goToBtn}>kk</div>
  )
}

export default GotoTop