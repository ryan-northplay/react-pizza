// import React, {Component} from 'react'
import React, {useState} from 'react'

const Categories = ({items, onClickItem}) => {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = index => {
    setActiveItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items &&
        items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            key={`${name}_${index}`}
            onClick={() => onSelectItem(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories

// class Categories extends Component {
//   state = {
//     activeItem: null
//   }
//
//  onSelectItem = index => {
//     this.setState({
//       activeItem: index,
//     })
//  }
//
// render() {
//   const {items} = this.props
//   return (
//     <div className="categories">
//       <ul>
//         <li>Все</li>
//         {items.map((name, index) => (
//           <li
//             className={this.state.activeItem === index ? 'active' : ''}
//             key={`${name}_${index}`}
//             onClick={() => this.onSelectItem(index)}
//           >
//             {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// }

