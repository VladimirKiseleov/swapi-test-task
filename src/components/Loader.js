import React from 'react'
import '../styles/loader.css'

// просто лоадер
export const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
