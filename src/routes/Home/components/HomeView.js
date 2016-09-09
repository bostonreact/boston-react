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
    <nav>
      <ul>
        <li>
          <a className="button" href="https://www.meetup.com/boston-react/">Meetup</a>
        </li>
        <li>
          <a className="button" href="https://github.com/bostonreact">
            <i className="fa fa-github"></i>
            Github
          </a>
        </li>
        <li>
          <a className="button" href="https://twitter.com/bostonreact">
            <i className="fa fa-twitter"></i>
            Twitter
          </a>
        </li>
        <li>
          <a className="button" href="http://slack.bostonreact.org">
            <i className="fa fa-slack"></i>
            Slack
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default HomeView
