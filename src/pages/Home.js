import React, { Fragment } from 'react'
// import { Card } from '../components/Card'
// import { Search } from '../components/Search'
// import { GithubContext } from '../context/github/githubContext'
// import 'antd/dist/antd.css'
// import { Table, Tag, Space } from 'antd'

const { data } = fetch('https://swapi.dev/api/')
  .then((response) => response.json())
  .then((json) => console.log(json))

export const Home = () => {
  // const columns = [
  //   {
  //     title: 'Номер',
  //     dataIndex: 'name',
  //     key: 'name',
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: 'Название',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: 'API',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  //   {
  //     title: 'link',
  //     key: 'tags',
  //     dataIndex: 'tags',
  //     render: (tags) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? 'geekblue' : 'green'
  //           if (tag === 'loser') {
  //             color = 'volcano'
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           )
  //         })}
  //       </>
  //     ),
  //   },
  // ]

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ]
  return (
    <Fragment>{/* <Table columns={columns} dataSource={data} /> */}</Fragment>
  )
}
