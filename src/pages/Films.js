import React, { Fragment, useState, useEffect } from 'react'
import { HomeBtn } from '../components/HomeBtn'

export const Films = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
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
  // console.log('items.results', items)
  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <Fragment>
        Films
        <div>Загрузка...</div>
        <div className="row">Страница в разработке</div>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        Films
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>{item.opening_crawl}</div>
            </li>
          ))}
        </ul>
        <HomeBtn />
      </Fragment>
    )
  }
}
