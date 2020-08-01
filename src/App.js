import React from 'react'
import {Header} from './components'
import {Home, Cart} from "./pages";
import {Switch, Route} from 'react-router'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  )
}

export default App
