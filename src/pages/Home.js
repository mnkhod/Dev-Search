import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'

import AppsIcon from "@material-ui/icons/Apps"
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Avatar } from "@material-ui/core"


import Brand from '../components/Brand'
import Search from '../components/Search'


function Home(){

  return (			
    <div className='home'>
      <div className="home__header">
        <div className="home__headerLeft">
          <a href="https://github.com/mnkhod"><GitHubIcon /></a>
          <a href="https://www.instagram.com/mnkh_od/"><InstagramIcon /></a>
        </div>

        <div className="home__headerRight">
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <h1 className="home__bodytitle">Dev Search</h1>
        <Search />
        <Brand />
      </div>

    </div>
  )
}

export default Home
