import React, { Fragment } from 'react'
import { Table } from 'antd'
import { GenderImg } from './GenderImg'
import moment from 'moment'
import { PlanetsFilter } from './PlanetsFilter'

export const CreateTable = (props) => {
  // создаем элемент колонки
  const column = (numberOfKey) => {
    const keyName = props.columns[numberOfKey]
    const generalProps = {
      title: keyName,
      dataIndex: keyName.toLowerCase(),
      key: keyName.toLowerCase(),
      render: (text) => {
        // для поля Gender возвращаем картинку в зависимости от пола.
        if (keyName === 'Gender') {
          return <GenderImg gender={text} />
        } else if (
          // для полей Created и Edited форматируем дату при помощи библиотеки moment.js
          keyName === 'Created' ||
          keyName === 'Edited'
        ) {
          return <div>{moment(text).format('LLL')}</div>
        } else {
          return <div>{text}</div>
        }
      },
    }
    // для полей Climate и Terrain создаём колонки с фильтрами
    // компонентом PlanetsFilter('Название колонки')
    if (keyName === 'Climate' || keyName === 'Terrain') {
      generalProps.filters = PlanetsFilter(keyName)
      generalProps.onFilter = (value, record) =>
        record[keyName.toLowerCase()].indexOf(value) === 0
    }
    return generalProps
  }

  // создаём массив колонок будущей таблицы
  const columns = () => {
    let columns = []
    for (let i = 0; i < props.columns.length; i++) {
      columns.push(column(i))
    }
    return columns
  }

  return (
    <Fragment>
      <Table columns={columns()} dataSource={props.items} />
    </Fragment>
  )
}
