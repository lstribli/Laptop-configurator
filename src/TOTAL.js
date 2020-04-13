import React from 'react'
import USCurrencyFormat from './App'

const TOTAL = () => {

  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    </div>
  )
}

export default TOTAL;