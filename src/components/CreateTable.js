import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import { GenderImg } from './GenderImg'

export const CreateTable = (props) => {
  // console.log(props.items)
  // создаем элемент колонки
  const column = (numberOfKey) => {
    return {
      title: props.columns[numberOfKey],
      dataIndex: props.columns[numberOfKey].toLowerCase(),
      key: props.columns[numberOfKey].toLowerCase(),
      render: (text) => {
        if (props.columns[numberOfKey] === 'Gender') {
          return <GenderImg gender={text} />
        } else {
          return <div>{text}</div>
        }
      },
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
  return (
    <Fragment>
      <Table columns={columns} dataSource={props.items} />
    </Fragment>
  )
}
