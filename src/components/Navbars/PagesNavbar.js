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



function IndexNavbar() {
  const hash = window.location.hash;
  const [navbarColor, setNavbarColor] = React.useState('');
  // const [navbarColor, setNavbarColor] = React.useState('danger');
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  // setNavbarColor('');

  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (document.documentElement.scrollTop > 1 || document.body.scrollTop > 1) {
  //       setNavbarColor('');
  //     } else if (
  //       document.documentElement.scrollTop < 400 ||
  //       document.body.scrollTop < 400
  //     ) {
  //       setNavbarColor('navbar-transparent');
  //       // setNavbarColor('danger');
  //     }
  //   };
  //   window.addEventListener('scroll', updateNavbarColor);
  //   return function cleanup() {
  //     window.removeEventListener('scroll', updateNavbarColor);
  //   };
  // });
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
      
      <Navbar className={'fixed-top ' + navbarColor} expand="lg" color="light" light = {true} >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/" id="navbar-brand">
              <img
                style={{ width: '125px' }}
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="bar-sa-logo"
              />
              {/* Now UI Kit React */}
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
              {/* //Home   */}
              <NavItem active={!!hash && hash === '#/index'}>
                <NavLink to="/index" tag={Link}>
                  Inicio
                </NavLink>
              </NavItem>

              {/* //About Us */}
              <NavItem active={!!hash && hash === '#/about'}>
                <NavLink to="/about" tag={Link}>
                  Sobre Nosotros
                </NavLink>
              </NavItem>

              
              <NavItem active={!!hash && hash === '#/faq'}>
                <NavLink to="/faq" tag={Link}>
                  preguntas frecuentes
                </NavLink>
              </NavItem>
              
              {/* Contact Us */}
              <NavItem active={!!hash && hash === '#/contact'}>
                <NavLink to="/contact" tag={Link}>
                  contactanos
                </NavLink>
              </NavItem>

              {/* //Terms and Conditions */}
              <NavItem active={!!hash && hash === '#/terms-and-conditions'}>
                <NavLink to="/terms-and-conditions" tag={Link}>
                  terminos y condiciones
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
