import React, { Fragment, useState, useEffect } from 'react'
import { CreateTable } from '../components/CreateTable'
import { Loader } from '../components/Loader'
import { PageLink } from '../components/PageLink'

export const People = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
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

  // проверка на ошибку/загрузку и render данных

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <Fragment>
        <div>People</div>
        <div>Загрузка...</div>
        <Loader />
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        People
        <CreateTable
          items={items}
          columns={[
            'Name',
            'Birth_year',
            'Gender',
            'Eye_color',
            'Created',
            'Edited',
          ]}
        />
        <PageLink />
      </Fragment>
    )
  }
}
