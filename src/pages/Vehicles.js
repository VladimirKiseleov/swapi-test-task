import React, { Fragment } from 'react'
import { HomeBtn } from '../components/HomeBtn'

export const Vehicles = () => {
  fetch('https://swapi.dev/api/vehicles/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      Vehicles
      <div className="row">Страница в разработке</div>
      <HomeBtn />
    </Fragment>
  )
}
