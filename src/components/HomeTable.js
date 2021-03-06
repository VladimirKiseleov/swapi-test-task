import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Table } from 'antd'
import { PageLink } from './PageLink'

export const HomeTable = (props) => {
  //создаем колонки таблицы
  const columns = [
    {
      title: 'Номер',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <div>{text}</div>,
    },
    {
      title: 'Название',
      dataIndex: 'res',
      key: 'res',
    },
    {
      title: 'API',
      dataIndex: 'address',
      key: 'address',
      render: (text) => <a href={text}>{text}</a>,
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
  // данные для таблицы
  const data = [
    {
      key: '1',
      name: '1',
      res: 'films',
      address: props.items.films,
      tags: ['films'],
    },
    {
      key: '2',
      name: '2',
      res: 'people',
      address: props.items.people,
      tags: ['people'],
    },
    {
      key: '3',
      name: '3',
      res: 'planets',
      address: props.items.planets,
      tags: ['planets'],
    },
    {
      key: '4',
      name: '4',
      res: 'species',
      address: props.items.species,
      tags: ['species'],
    },
    {
      key: '5',
      name: '5',
      res: 'starships',
      address: props.items.starships,
      tags: ['starships'],
    },
    {
      key: '6',
      name: '6',
      res: 'vehicles',
      address: props.items.vehicles,
      tags: ['vehicles'],
    },
  ]

  return <Fragment>{<Table columns={columns} dataSource={data} />}</Fragment>
}
