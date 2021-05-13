import React from 'react'
import { PageCreator } from '../components/PageCreator'

// создаем страницу через компонент создания страниц.
// передаем в пропс поля name и columns

export const Species = () => {
  return (
    <PageCreator
      name="Species"
      columns={[
        'Name',
        'Classification',
        'Designation',
        'Language',
        'Hair_colors',
        'Eye_colors',
      ]}
    />
  )
}
