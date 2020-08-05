// import React, {Component} from 'react'
import React, {memo} from 'react'
import PropTypes, {oneOf} from "prop-types";

const Categories = memo(function Categories({activeCategory, items, onClickCategory}) {

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
        items.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            key={`${name}_${index}`}
            onClick={() => onClickCategory(index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  // activeCategory: oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {
  activeCategory: null,
  items: []
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

