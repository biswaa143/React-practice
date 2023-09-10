import React from 'react'
import { Link } from 'react-router-dom'

const ComA = () => {
    const data = "I will pass to comB";
  return (
    <div>
      <h2>Component A</h2>
      <Link to={`/ComB/${data}`}>Go To Component B</Link>
    </div>
  )
}

export default ComA
