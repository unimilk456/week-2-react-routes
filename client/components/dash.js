import React from 'react'
import { Link } from 'react-router-dom'

const Dash = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/8a646531-edeb-4ee1-810d-bc6c5e19bb68"> Go To Profile </Link>
      <Link to="/dashboard/main"> Go To Main</Link>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
