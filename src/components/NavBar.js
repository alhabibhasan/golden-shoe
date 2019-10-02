import React from 'react';
import { BrowserRouter as Link} from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar() {
  return (
    <Nav>
        
        <NavItem>
          <NavLink>
              <Link to='/'>Home</Link>
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink>
              <Link to='/shoes'>See shoes</Link>
          </NavLink>
        </NavItem>

        <NavItem>
            <NavLink>
              <Link to='/returns'>Returns</Link>
            </NavLink>
        </NavItem>

    </Nav>
  );
}

export default NavBar;
