import React, { Fragment } from 'react'

export const Species = () => {
  fetch('https://swapi.dev/api/species/')
    .then((response) => response.json())
    .then((json) => console.log(json))

  return (
    <Fragment>
      Species
      <div className="row">Страница в разработке</div>
    </Fragment>
  )
}
