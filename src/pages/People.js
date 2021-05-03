import React, { Fragment } from 'react'
import { FetchFuncComponent } from '../components/FetchFuncComponent'

export const People = () => {
  return (
    <Fragment>
      People
      <div className="row">Страница в разработке</div>
      <FetchFuncComponent name="people"></FetchFuncComponent>
    </Fragment>
  )
}
