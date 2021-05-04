import React, { Fragment, useState, useEffect } from 'react'
import { HomeBtn } from '../components/HomeBtn'
import { CreateTable } from '../components/CreateTable'

export const People = (props) => {
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

  console.log('items', items)

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <Fragment>
        People
        <div>Загрузка...</div>
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
        <HomeBtn />
      </Fragment>
    )
  }
}
