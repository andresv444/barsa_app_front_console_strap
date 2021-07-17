/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Container } from 'reactstrap';

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
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
  );
}

export default DarkFooter;
