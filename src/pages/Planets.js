import React, { Fragment } from 'react'
import { HomeBtn } from '../components/HomeBtn'

export const Planets = () => {
  fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      Planets
      <div className="row">Страница в разработке</div>
      <HomeBtn />
    </Fragment>
  )
}
