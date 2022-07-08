

import React from 'react'
import './main.scss'

const testItem = ({userTest}) => {
  
    return (
    <div className="test_item">
                <span>{userTest.title}</span>
              </div>
  )
}

export default testItem