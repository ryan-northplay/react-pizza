import React, {useState, useEffect} from 'react'
import {Switch, Route} from 'react-router'
import axios from 'axios'
import {Header} from './components'
import {Home, Cart} from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then (({data}) => {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" render={() => <Home items={pizzas} />} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  )
}

export default App
