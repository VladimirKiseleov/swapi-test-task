import React from 'react'
import { PageCreator } from '../components/PageCreator'

// создаем страницу через компонент создания страниц.
// передаем в пропс поля name и columns

export const Films = () => {
  return (
    <PageCreator
      name="Films"
      columns={[
        'Title',
        'Episode_id',
        'Director',
        'Producer',
        'Created',
        'Edited',
      ]}
    />
  )
}
