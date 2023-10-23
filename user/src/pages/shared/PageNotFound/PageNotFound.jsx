import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/shared/Button/Button'

const PageNotFound = () => {
  return (
    <div className="PageContainer">
      <h1>Page is not found</h1>
      <h3>Go back to <Link to="/"><Button variant="primary">Home</Button></Link></h3>
    </div>
  )
}

export default PageNotFound