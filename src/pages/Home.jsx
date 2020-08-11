import React, {useCallback, useEffect} from 'react'
import {Categories, SortPopup, PizzaLoadingBlock, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/actions/filters'
import {fetchPizzas} from "../redux/actions/pizzas";
import {ADD_PIZZA_CART} from "../redux/actionTypes";

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
]
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
]

const Home = () => {
  const dispatch = useDispatch()
  // const items = useSelector(({pizzasReducer}) => pizzasReducer.items.pizzas)
  const items = useSelector(({pizzasReducer}) => pizzasReducer.items)
  const cartItems = useSelector(({cartReducer}) => cartReducer.items)
  const isLoaded = useSelector(({pizzasReducer}) => pizzasReducer.isLoaded)
  const {category, sortBy} = useSelector(({filtersReducer}) => filtersReducer)
  // const {items} = useSelector(({pizzasReducer}) => ({
  //   items: pizzasReducer.items
  // }))
  console.log('[Home][items]', items)
  console.log('[Home][cartItems]', cartItems)
  console.log('[Home][category, sortBy]', category, sortBy)
  useEffect(() => {
      dispatch(fetchPizzas(sortBy, category))
    //   axios.get('http://localhost:3000/db.json').then (({data}) => {
    //     dispatch(setPizzas(data.pizzas))
    //   })
    // }, [])
  }, [category, sortBy, dispatch])


  const onSelectCategory = useCallback(index => {
    dispatch(setCategory(index))
  }, [dispatch])

  const onSelectSortType = useCallback(type => {
    dispatch(setSortBy(type))
  }, [dispatch])

  const handleAddPizzaToCart = obj => {
    dispatch({
      type: ADD_PIZZA_CART,
      payload: obj
    })
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map(obj => (
            <PizzaBlock
            onClickAddPizza={handleAddPizzaToCart}
            key={obj.id}
            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
            {...obj}
          />
          ))
        : Array(12)
            .fill(0)
            .map((_, index) => <PizzaLoadingBlock key={index} />) }
      </div>
    </div>
  )
}

export default Home
