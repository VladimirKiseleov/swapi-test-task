import React, { Fragment } from 'react'

export const Starships = () => {
  fetch('https://swapi.dev/api/starships/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      Starships
      <div className="row">Страница в разработке</div>
    </Fragment>
  )
}
