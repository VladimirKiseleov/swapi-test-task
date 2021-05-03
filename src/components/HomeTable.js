import React, { Fragment } from 'react'
// import { Card } from '../components/Card'
// import { Search } from '../components/Search'
// import { GithubContext } from '../context/github/githubContext'
import 'antd/dist/antd.css'
import { Table, Tag } from 'antd'

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
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      name: '1',
      age: 'film',
      address: 'https://swapi.dev/api/films/',
      tags: ['«Открыть страницу»'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['«Открыть страницу»'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['«Открыть страницу»'],
    },
  ]
  return <Fragment>{<Table columns={columns} dataSource={data} />}</Fragment>
}
