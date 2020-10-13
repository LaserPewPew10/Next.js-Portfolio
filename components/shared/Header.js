import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import Link from "next/link";

// const Example = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
// <Navbar color="light" light expand="md">
//   <NavbarBrand href="/">reactstrap</NavbarBrand>
//   <NavbarToggler onClick={toggle} />
//   <Collapse isOpen={isOpen} navbar>
//     <Nav className="mr-auto" navbar>
//       <NavItem>
//         <NavLink href="/components/">Components</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink href="https://github.com/reactstrap/reactstrap">
//           GitHub
//         </NavLink>
//       </NavItem>
//       <UncontrolledDropdown nav inNavbar>
//         <DropdownToggle nav caret>
//           Options
//         </DropdownToggle>
//         <DropdownMenu right>
//           <DropdownItem>Option 1</DropdownItem>
//           <DropdownItem>Option 2</DropdownItem>
//           <DropdownItem divider />
//           <DropdownItem>Reset</DropdownItem>
//         </DropdownMenu>
//       </UncontrolledDropdown>
//     </Nav>
//     <NavbarText>Simple Text</NavbarText>
//   </Collapse>
// </Navbar>
//     </div>
//   );
// };

// export default Example;

const BsNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link">{title}</a>
    </Link>
  );
};

export default class Header extends React.Component {
  state = { isOpen: false };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem>
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem>
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem>
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem>
              <BsNavLink href="/cv" title="CV" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
