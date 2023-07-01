import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'; 
import { menu } from "./menuItems.js";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook 
import MenuItem from './MenuItem.js'


function Menu(){

  // Initial state
  const [state, setState] = useState({
    all_menu: menu,
    shown_menu: menu,
  })

  return (
       <Col>
          <Container className='d-flex flex-wrap'>
            {state.shown_clothes.map(x => <MenuItem {...x} />)}
          </Container>
        </Col>
  );

}

export default Menu;