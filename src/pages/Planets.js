import React, { Fragment } from 'react'

export const Planets = () => {
  fetch('https://swapi.dev/api/planets/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      Planets
      <div className="row">Страница в разработке</div>
    </Fragment>
  )
}
