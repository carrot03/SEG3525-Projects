import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { data } from "./Menu_data.js"
import menu_data from './Menu_data.json';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Facets_container from './Facets_container';
import MenuItem from './MenuItem';
//import './Menu.css';


function Menu() {

  const build_categorical_facet_values = (name) => {
    const values = [...new Set(data.map(item => item[name]))]
    return values.map(value => ({ 'name': value, 'checked': false }))
  }

  // Initial state
  const [state, setState] = useState({
    all_menu: data,
    shown_menu: data,
    facets: {
      category: build_categorical_facet_values('category')
    }
  })


  //Updates state.shown_menu whenever state.facets changes
  useEffect(() => {
    const facets = {}
    // Get all the facet values that are true/active/selected.
    Object.entries(state.facets).forEach(([name, values]) => {
      facets[name] = []
      values.forEach(value => {
        if (value.checked) {
          facets[name].push(value.name)
        }
      })
    })

    // If there are no facets selected, show all menu
    if (Object.values(facets).every(arr => arr.length === 0)) {
      setState({ ...state, shown_menu: state.all_menu })
      return
    }

    // Getting the number of active facet (Not facet_values)
    const number_of_active_facets = Object.values(facets).filter(x => x.length).length

    // Double loop through all menu and all active facets
    // Keep only the clothes that match the active facets
    const to_show = state.all_menu.map(menuItem =>
      Object.entries(facets).map(([name, values]) =>
        values.includes(menuItem[name])).filter(Boolean).length === number_of_active_facets ? menuItem : undefined
    ).filter(Boolean)

    setState({ ...state, shown_menu: to_show })
  }, [state.facets])

  function clearAllFacetValues(facet) {
    const new_facet = state.facets[facet].map(facet_value => ({
      ...facet_value, checked: false
    }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  // Function to pass down to the Facet_value component to modify the state in this component.
  function updateCategory(facet, value, newChecked) {
    const new_facet = state.facets[facet].map(({ name, checked }) => ({ name: name, checked: name === value ? newChecked : checked }))
    setState({ ...state, facets: { ...state.facets, [facet]: new_facet } })
  }

  return (
    <div>
      <Row>
        <Col className='border-end' md={3}>
          <Facets_container facets={state.facets} updateCategory={updateCategory} clearAllFacetValues={clearAllFacetValues} />
        </Col>
        <Col>
        <Container className='d-flex flex-wrap'>
            {state.shown_menu.map((item) => (
              <MenuItem
                key={item.id} // Assuming there's an 'id' property in the 'item' object
                name={item.name}
                price={item.price}
                description={item.description}
                ingredients={item.ingredients}
                category={item.category}
              />
            ))}
          </Container>
        </Col>
      </Row>
      
    </div>
  );
}

export default Menu;