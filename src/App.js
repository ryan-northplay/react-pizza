import React, {Component, useState, useEffect} from 'react'
import {Switch, Route} from 'react-router'
import {connect} from 'react-redux'
import axios from 'axios'
import {Header} from './components'
import {Home, Cart} from "./pages";
import {setPizzas} from './redux/actions/pizzas'

class App extends Component {
  componentDidMount() {
        axios.get('http://localhost:3000/db.json').then (({data}) => {
      this.props.setPizzas(data.pizzas)
    })
  }

  render() {
    const {items} = this.props
    console.log(items)
      return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" render={() => <Home items={items} />} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  )
  }
}

const mapStateToProps = state => ({
  items: state.pizzasReducer.items
})

const mapDispatchToProps = {
    setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then (({data}) => {
//       setPizzas(data.pizzas)
//     })
//   }, [])
//
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Switch>
//           <Route path="/" render={() => <Home items={pizzas} />} exact />
//           <Route path="/cart" component={Cart} />
//         </Switch>
//       </div>
//     </div>
//   )
// }

