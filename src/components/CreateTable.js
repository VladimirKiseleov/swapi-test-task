import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import { GenderImg } from './GenderImg'
import moment from 'moment'
import { TerrainFilter } from './filters/TerrainFilter.js'
import { ClimateFilter } from './filters/ClimateFilter.js'
// import { PlanetsFilter } from './filters/PlanetsFilter'

export const CreateTable = (props) => {
  // const createFilter = () => {
  //   const filters = []
  //   for (let i=0; i< 'length';i++ ) {
  //     filters.push({title:'',value:''})
  //   }
  //   return filters
  // }
  // console.log(props.items)

  // создаем элемент колонки
  const column = (numberOfKey) => {
    if (props.columns[numberOfKey] === 'Climate') {
      return {
        title: props.columns[numberOfKey],
        dataIndex: props.columns[numberOfKey].toLowerCase(),
        key: props.columns[numberOfKey].toLowerCase(),
        filters: ClimateFilter(),
        onFilter: (value, record) => record.climate.indexOf(value) === 0,
        render: (text) => {
          return <div>{text}</div>
        },
      }
    } else if (props.columns[numberOfKey] === 'Terrain') {
      return {
        title: props.columns[numberOfKey],
        dataIndex: props.columns[numberOfKey].toLowerCase(),
        key: props.columns[numberOfKey].toLowerCase(),
        filters: TerrainFilter(),
        onFilter: (value, record) => record.terrain.indexOf(value) === 0,
        render: (text) => {
          return <div>{text}</div>
        },
      }
    } else {
      return {
        title: props.columns[numberOfKey],
        dataIndex: props.columns[numberOfKey].toLowerCase(),
        key: props.columns[numberOfKey].toLowerCase(),
        render: (text) => {
          if (props.columns[numberOfKey] === 'Gender') {
            return <GenderImg gender={text} />
          } else if (
            props.columns[numberOfKey] === 'Created' ||
            props.columns[numberOfKey] === 'Edited'
          ) {
            return <div>{moment(text).format('LLL')}</div>
          } else {
            return <div>{text}</div>
          }
        },
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
