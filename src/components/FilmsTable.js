import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'

export const FilmsTable = (props) => {
  console.log(props.items)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Episode_id',
      dataIndex: 'episode_id',
      key: 'episode_id',
    },
    {
      title: 'Director',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: 'Producer',
      dataIndex: 'producer',
      key: 'producer',
    },
    {
      title: 'Сreated',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Edited',
      dataIndex: 'edited',
      key: 'edited',
    },
  ]

  return (
    <Fragment>
      <Table columns={columns} dataSource={props.items} />
    </Fragment>
  )
}
