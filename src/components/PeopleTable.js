import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import { GenderImg } from './GenderImg'

export const PeopleTable = (props) => {
  console.log(props.items)
  console.log('props', props.columns)
  // создаем элемент колонки
  const column = (numberOfKey) => {
    return {
      title: props.columns[numberOfKey],
      dataIndex: props.columns[numberOfKey].toLowerCase(),
      key: props.columns[numberOfKey].toLowerCase(),
      render: (text) => <a>{text}</a>,
    }
  }

  const columns = [
    // column(0),
    // column(1),
    // column(2),
    // column(3),
    // column(4),
    // column(5),
    {
      title: props.columns[0],
      dataIndex: props.columns[0].toLowerCase(),
      key: props.columns[0].toLowerCase(),
      render: (text) => <a>{text}</a>,
    },
    {
      title: props.columns[1],
      dataIndex: props.columns[1].toLowerCase(),
      key: props.columns[1].toLowerCase(),
    },
    {
      title: props.columns[2],
      dataIndex: props.columns[2].toLowerCase(),
      key: props.columns[2].toLowerCase(),
      render: (text) => <GenderImg gender={text} />,
    },
    {
      title: props.columns[3],
      dataIndex: props.columns[3].toLowerCase(),
      key: props.columns[3].toLowerCase(),
    },
    {
      title: props.columns[4],
      dataIndex: props.columns[4].toLowerCase(),
      key: props.columns[4].toLowerCase(),
    },
    {
      title: props.columns[5],
      dataIndex: props.columns[5].toLowerCase(),
      key: props.columns[5].toLowerCase(),
    },
  ]

  return (
    <Fragment>
      <Table columns={columns} dataSource={props.items} />
    </Fragment>
  )
}
