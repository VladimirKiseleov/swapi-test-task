import React from 'react'
import { PageCreator } from '../components/PageCreator'

// создаем страницу через компонент создания страниц.
// передаем в пропс поля name и columns

export const People = () => {
  return (
    <PageCreator
      name="People"
      columns={[
        'Name',
        'Birth_year',
        'Gender',
        'Eye_color',
        'Created',
        'Edited',
      ]}
    />
  )
}
