/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            Copyright {new Date().getFullYear()} © <a href="/">Barsa</a>. All rights
            reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
