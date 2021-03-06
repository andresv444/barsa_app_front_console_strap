import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';

function ExamplesNavbar() {
  const hash = window.location.hash;
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
        setNavbarColor('');
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor('navbar-transparent');
      }
    };
    window.addEventListener('scroll', updateNavbarColor);
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={'fixed-top ' + navbarColor} color="info" expand="lg">
        <Container>
          {/* <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Already a User?
              </DropdownItem>
              <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                Login
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem header tag="a">
                Wanna sign up?
              </DropdownItem>
              <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                Sign Up
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <div className="navbar-translate">
            <NavbarBrand href="/" id="navbar-brand">
              <img style={{ width: '60px' }} src={process.env.PUBLIC_URL + '/logo.png'} />
              {/* Now Ui Kit */}
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle('nav-open');
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav navbar>
              <NavItem active={!!hash && hash === '#/index'}>
                <NavLink to="/index" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem active={!!hash && hash === '#/about'}>
                <NavLink to="/about" tag={Link}>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem active={!!hash && hash === '#/faq'}>
                <NavLink to="/faq" tag={Link}>
                  Frequent Questions
                </NavLink>
              </NavItem>
              <NavItem active={!!hash && hash === '#/contact'}>
                <NavLink to="/contact" tag={Link}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem active={!!hash && hash === '#/terms-and-conditions'}>
                <NavLink to="/terms-and-conditions" tag={Link}>
                  Terms and Conditions
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
