import React, { Fragment } from 'react'
// import { Card } from '../components/Card'
// import { Search } from '../components/Search'
// import { GithubContext } from '../context/github/githubContext'
import 'antd/dist/antd.css'
import { HomeTable } from '../components/HomeTable'

export const Home = () => {
  return (
    <Fragment>
      Home
      <div className="row"></div>
      <HomeTable></HomeTable>
    </Fragment>
  )
}
