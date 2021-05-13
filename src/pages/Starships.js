import React from 'react'
import { PageCreator } from '../components/PageCreator'

// создаем страницу через компонент создания страниц.
// передаем в пропс поля name и columns

export const Starships = () => {
  return (
    <PageCreator
      name="Starships"
      columns={[
        'Name',
        'Model',
        'Crew',
        'Hyperdrive_rating',
        'Length',
        'Starship_class',
      ]}
    />
  )
}
