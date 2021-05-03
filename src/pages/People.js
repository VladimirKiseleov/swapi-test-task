import React, { Fragment } from 'react'
import { FetchFuncComponent } from '../components/FetchFuncComponent'

export const People = () => {
  fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      People
      <div className="row">Страница в разработке</div>
      <FetchFuncComponent name="people"></FetchFuncComponent>
    </Fragment>
  )
}
