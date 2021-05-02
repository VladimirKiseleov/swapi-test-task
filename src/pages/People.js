import React, { Fragment } from 'react'
import { FetchFuncComponent } from '../components/FetchFuncComponent'
// import { Card } from '../components/Card'
// import { Search } from '../components/Search'
// import { GithubContext } from '../context/github/githubContext'

export const People = () => {
  // const { loading, users } = useContext(GithubContext)

  return (
    <Fragment>
      People
      <div className="row">Страница в разработке</div>
      <FetchFuncComponent></FetchFuncComponent>
    </Fragment>
  )
}
