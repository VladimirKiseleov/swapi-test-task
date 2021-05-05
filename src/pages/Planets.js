import React, { Fragment, useState, useEffect } from 'react'
import { CreateTable } from '../components/CreateTable'
import { Loader } from '../components/Loader'
import { PageLink } from '../components/PageLink'

export const Planets = (props) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.results)
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  console.log('items', items)

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <Fragment>
        Planets
        <Loader />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        Planets
        <CreateTable
          items={items}
          columns={[
            'Name',
            'Terrain',
            'Climate',
            'Surface_water',
            'Population',
            'Gravity',
          ]}
        />
        <PageLink />
      </Fragment>
    )
  }
}
