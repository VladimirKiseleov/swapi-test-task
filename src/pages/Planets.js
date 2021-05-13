import React from 'react'
import { PageCreator } from '../components/PageCreator'

// создаем страницу через компонент создания страниц.
// передаем в пропс поля name и columns

export const Planets = () => {
  return (
    <PageCreator
      name="Planets"
      columns={[
        'Name',
        'Terrain',
        'Climate',
        'Surface_water',
        'Population',
        'Gravity',
      ]}
    />
  )
}
