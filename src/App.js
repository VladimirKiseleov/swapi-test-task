import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Films } from './pages/Films'
import { People } from './pages/People'
import { Planets } from './pages/Planets'
import { Species } from './pages/Species'
import { Starships } from './pages/Starships'
import { Vehicles } from './pages/Vehicles'
import './styles/styles.css'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const { Header, Content, Footer } = Layout

// можно добавить пагинацию
function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <NavLink exact to="/">
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/films">Films</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/people">People</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="/planets">Planets</NavLink>
            </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/species">Species</NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/starships">Starships</NavLink>
            </Menu.Item>
            <Menu.Item key="7">
              <NavLink to="/vehicles">Vehicles</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
          <div className="site-layout-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/films" component={Films} />
              <Route path="/people" component={People} />
              <Route path="/planets" component={Planets} />
              <Route path="/species" component={Species} />
              <Route path="/starships" component={Starships} />
              <Route path="/vehicles" component={Vehicles} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          SWAPI-test-task by Vladimir Kiseleov
        </Footer>
      </Layout>
    </BrowserRouter>
  )
}
export default App
