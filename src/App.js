import React from 'react'
import {Switch, Route} from 'react-router'

import {Header} from './components'
import {Home, Cart} from "./pages";


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route path="/" component={Home} />} exact />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </div>
  )
}

export default App


// class App extends Component {
//   componentDidMount() {
//         axios
//           .get('http://localhost:3000/db.json')
//           .then(({data}) => {
//       this.props.setPizzas(data.pizzas)
//     })
//   }
//
//   render() {
//     const {items} = this.props
//       return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Switch>
//           <Route path="/" render={() => <Home items={items} />} exact />
//           <Route path="/cart" component={Cart} />
//         </Switch>
//       </div>
//     </div>
//   )
//   }
// }
//
// const mapStateToProps = state => ({
//   items: state.pizzasReducer.items
// })
//
// const mapDispatchToProps = {
//     setPizzas
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)


