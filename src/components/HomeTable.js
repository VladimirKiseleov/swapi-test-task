import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import { PageLink } from '../components/PageLink'
import { NavLink } from 'react-router-dom'

export const HomeTable = (props) => {
  console.log('props', props)
  console.log('props.items', props.items)
  console.log('props.items.films', props.items.films)

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
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'link',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return <PageLink props={tag} />
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
      address: props.items.films,
      tags: ['/films'],
    },
    {
      key: '2',
      name: '2',
      age: 'people',
      address: props.items.people,
      tags: ['people'],
    },
    {
      key: '3',
      name: '3',
      age: 'planets',
      address: props.items.planets,
      tags: ['planets'],
    },
    {
      key: '4',
      name: '4',
      age: 'species',
      address: props.items.species,
      tags: ['species'],
    },
    {
      key: '5',
      name: '5',
      age: 'starships',
      address: props.items.starships,
      tags: ['starships'],
    },
    {
      key: '6',
      name: '6',
      age: 'vehicles',
      address: props.items.vehicles,
      tags: ['vehicles'],
    },
  ]

  return <Fragment>{<Table columns={columns} dataSource={data} />}</Fragment>
}
