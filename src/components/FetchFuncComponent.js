import React, { useState, useEffect } from 'react'

// в props передаем поле name чтобы вернуть ссылку на нужные API

export function FetchFuncComponent(props) {
  console.log(props.name)
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

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return <ul>{items[props.name]}</ul>
  }
}
