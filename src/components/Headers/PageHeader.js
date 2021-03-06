import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

// core components

function ProfilePageHeader({ title, subtitle, headline }) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (!!pageHeader && !!pageHeader.current && !!pageHeader.current.style)
          pageHeader.current.style.transform =
            'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header clear-filter page-header-small" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              'url(' + require('assets/img/e-commerce-bg.jpg').default + ')'
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <h2 className="title">{title}</h2>
          {!!subtitle && <p className="category">{subtitle}</p>}
          <div className="content">
            <p>{headline}</p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
