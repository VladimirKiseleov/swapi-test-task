import React, { Fragment, useState, useEffect } from 'react'
import 'antd/dist/antd.css'
import { HomeTable } from '../components/HomeTable'

export const Home = () => {
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
  console.log(items)
  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <Fragment>
        Home
        <div>Загрузка...</div>
        <div className="row"></div>
        <HomeTable></HomeTable>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        Home
        <div className="row"></div>
        <HomeTable></HomeTable>
        <ul>{items.films}</ul>
      </Fragment>
    )
  }
}
