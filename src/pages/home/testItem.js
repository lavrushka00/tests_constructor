import React from 'react'

const TestItem = ({item}) => {
    console.log(item)
  return (
    <div className="test_item">
        <span>{item.title}</span>
        <span>{item.created_at}</span>
        <span>
          <div>П</div>
          <div>У</div>
        </span>
      </div>
  )
}

export default TestItem