import React from 'react'
import LogoImage from '../assets/react-logo.png'
import classes from './HomeView.scss'

export const HomeView = () => (
  <div>
    <img
      alt="ReactJS Logo"
      className="react-logo"
      src={LogoImage} />
    <h1>Boston ReactJS</h1>
  </div>
)

export default HomeView
