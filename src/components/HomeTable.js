import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Table, Tag } from 'antd'

export const HomeTable = (props) => {
  console.log('props', props)
  console.log('props.items', props.items)
  // console.log('props.items.people', props.items.people)

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
            let color = 'geekblue'

            return (
              <li className="nav-item">
                <NavLink exact to="/films" className="nav-link">
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                </NavLink>
              </li>
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
      age: 'films',
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
    {
      key: '4',
      name: '1',
      age: 'film',
      address: 'https://swapi.dev/api/films/',
      tags: ['«Открыть страницу»'],
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['«Открыть страницу»'],
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['«Открыть страницу»'],
    },
  ]

  return <Fragment>{<Table columns={columns} dataSource={data} />}</Fragment>
}
