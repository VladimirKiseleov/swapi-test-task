import React, { Fragment, useState, useEffect } from 'react'
import { HomeBtn } from '../components/HomeBtn'
import { CreateTable } from '../components/CreateTable'

export const Vehicles = (props) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    fetch('https://swapi.dev/api/vehicles/')
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
        Vehicles
        <div>Загрузка...</div>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        Vehicles
        <CreateTable
          items={items}
          columns={[
            'Name',
            'Model',
            'Vehicle_class',
            'Crew',
            'Cargo_capacity',
            'Manufacturer',
          ]}
        />
        <HomeBtn />
      </Fragment>
    )
  }
}
