import React, { Fragment } from 'react'
// import { Card } from '../components/Card'
// import { Search } from '../components/Search'
// import { GithubContext } from '../context/github/githubContext'
import 'antd/dist/antd.css'
import { Table } from 'antd'

export const HomeTable = () => {
  const columns = [
    {
      title: 'Номер',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Название',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'API',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'link',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  return <Fragment>{<Table columns={columns} dataSource={data} />}</Fragment>
}
