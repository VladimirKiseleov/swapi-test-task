import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import { GenderImg } from './GenderImg'
import moment from 'moment'
import { PlanetsFilter } from './PlanetsFilter'

export const CreateTable = (props) => {
  // const createFilter = () => {
  //   const filters = []
  //   for (let i=0; i< 'length';i++ ) {
  //     filters.push({title:'',value:''})
  //   }
  //   return filters
  // }
  // console.log(props.items)

  // создаем элемент колонки и для полей Climate и Terrain создаём колонки с фильтрами, компонентом PlanetsFilter('Название колонки')
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
    console.log(numberOfKey)
    if (keyName === 'Climate') {
      return {
        ...generalProps,
        filters: PlanetsFilter(keyName),
        onFilter: (value, record) => record.climate.indexOf(value) === 0,
      }
    } else if (keyName === 'Terrain') {
      return {
        ...generalProps,
        filters: PlanetsFilter(keyName),
        onFilter: (value, record) => record.terrain.indexOf(value) === 0,
      }
    } else {
      return {
        ...generalProps,
      }
    }
  }

  // создаём массив колонок будущей таблицы

  const columns = [
    column(0),
    column(1),
    column(2),
    column(3),
    column(4),
    column(5),
  ]

  // const columns = () => {
  //   let columns = []
  //   for (let i = 0; i < props.columns.length; i++) {
  //     columns.push(column(i))
  //   }
  //   return columns
  // }

  return (
    <Fragment>
      <Table columns={columns} dataSource={props.items} />
    </Fragment>
  )
}
