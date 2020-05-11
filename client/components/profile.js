import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {
  const { userId } = useParams()
  return (
    <div it="title">
      Profile
      <div id="username"> {userId} </div>
      <Link to="/dashboard"> Go To Root </Link>
      <Link to="/dashboard/main"> Go To Main</Link>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
