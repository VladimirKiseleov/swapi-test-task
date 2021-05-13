// import React, { Fragment, useState, useEffect } from 'react'
import React from 'react'
// import { CreateTable } from '../components/CreateTable'
// import { Loader } from '../components/Loader'
import { PageCreator } from '../components/PageCreator'
// import { PageLink } from '../components/PageLink'

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
// export const Films = (props) => {
//   const [error, setError] = useState(null)
//   const [isLoaded, setIsLoaded] = useState(false)
//   const [items, setItems] = useState([])

//   // Примечание: пустой массив зависимостей [] означает, что
//   // этот useEffect будет запущен один раз
//   // аналогично componentDidMount()

//   // получаем данные по фильмам
//   useEffect(() => {
//     fetch('https://swapi.dev/api/films/')
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true)
//           setItems(result.results)
//         },
//         // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//         // чтобы не перехватывать исключения из ошибок в самих компонентах.
//         (error) => {
//           setIsLoaded(true)
//           setError(error)
//         }
//       )
//   }, [])

//   // проверка на ошибку/загрузку и render данных
//   if (error) {
//     return <div>Ошибка: {error.message}</div>
//   } else if (!isLoaded) {
//     return (
//       <Fragment>
//         <div>Films</div>
//         <div>Загрузка...</div>
//         <Loader />
//       </Fragment>
//     )
//   } else {
//     return (
//       <Fragment>
//         Films
//         <CreateTable
//           items={items}
//           columns={[
//             'Title',
//             'Episode_id',
//             'Director',
//             'Producer',
//             'Created',
//             'Edited',
//           ]}
//         />
//         <PageLink />
//       </Fragment>
//     )
//   }
// }
