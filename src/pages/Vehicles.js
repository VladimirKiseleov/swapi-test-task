import React from 'react'
import { PageCreator } from '../components/PageCreator'

// создаем страницу через компонент создания страниц.
// передаем в пропс поля name и columns

export const Vehicles = () => {
  return (
    <PageCreator
      name="Vehicles"
      columns={[
        'Name',
        'Model',
        'Vehicle_class',
        'Crew',
        'Cargo_capacity',
        'Manufacturer',
      ]}
    />
  )
}
