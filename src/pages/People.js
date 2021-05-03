import React, { Fragment } from 'react'
import { FetchFuncComponent } from '../components/FetchFuncComponent'
import { HomeBtn } from '../components/HomeBtn'

export const People = () => {
  fetch('https://swapi.dev/api/people/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      People
      <div className="row">Страница в разработке</div>
      <FetchFuncComponent name="people"></FetchFuncComponent>
      <HomeBtn />
    </Fragment>
  )
}
