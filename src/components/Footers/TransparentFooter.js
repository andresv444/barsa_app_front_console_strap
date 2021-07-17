/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';

// reactstrap components
import { Container } from 'reactstrap';

function TransparentFooter() {
  return (
    <footer className="footer">
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

export default TransparentFooter;
