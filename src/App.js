import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Films } from './pages/Films'
import { People } from './pages/People'
import { Planets } from './pages/Planets'
import { Species } from './pages/Species'
import { Starships } from './pages/Starships'
import { Vehicles } from './pages/Vehicles'
import './styles/styles.css'

// можно добавить пагинацию
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="center">
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
    </BrowserRouter>
  )
}
export default App
