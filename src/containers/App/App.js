import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import Home from '../Home/Home'
import NotFound from '../NotFount/NotFound'
import Player from '../Player/Player'

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies" component={Home} />
        <Route path="/player" component={Player} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
    <footer className="text-center">
      Copyright &copy;{new Date().getFullYear()}
    </footer>
  </>
)

export default App
