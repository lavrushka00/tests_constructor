import React from 'react'
import './main.scss'
import TestItem from './testItem'

const testsList = ({userTests}) => {
    
  return (
    <div className="tests">
              {userTests.map((item) => 
              <TestItem userTest = {item}/>
              )}
            </div>
  )
}

export default testsList