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

function PagesNavbar() {
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
          <div className="navbar-translate">
            <NavbarBrand href="/" id="navbar-brand">
              <img
                style={{ width: '60px' }}
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="bar-sa-logo"
              />
            
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PagesNavbar;
