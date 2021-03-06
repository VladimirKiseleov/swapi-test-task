import React, { Fragment, useState, useEffect } from 'react'
import { HomeTable } from '../components/HomeTable'
import { Loader } from '../components/Loader'

export const Home = (props) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    fetch('https://swapi.dev/api/')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
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
        <div>Home</div>
        <div>Загрузка...</div>
        <Loader />
        <div className="row"></div>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        Home
        <div className="row"></div>
        <HomeTable items={items}></HomeTable>
      </Fragment>
    )
  }
}
