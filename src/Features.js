import React from 'react'
import features from './App'
const FEATURES = () => {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}

export default FEATURES;