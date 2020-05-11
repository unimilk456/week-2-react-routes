import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/8a646531-edeb-4ee1-810d-bc6c5e19bb68"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Root </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
