/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';
// core components

function IndexHeader({ image }) {
  let pageHeader = React.createRef();

  // console.log(image, `url('${image}').default})`);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        if (!!pageHeader.current && !!pageHeader.current.style)
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
      <div className="page-header clear-filter" filter-color= 'coffe' >
        {!!image && (
          <div
            className="page-header-image"
            style={{ backgroundImage: `url('${image}')` }}
            ref={pageHeader}
          ></div>
        )}
        <Container>
          <div className="content-center brand" style = {{display:'flex'}}>
            {/* <img
              alt="..."
              className="n-logo"
              src={require('assets/img/logo.png').default}
            ></img> */}
            <div style = {{background:"rgba(255,255,255,0.0)", width:'75%', margin:'auto', borderRadius: '5%'} }>
        
              <div style= {{opacity:'1'}}>
                  <h1 className="title text-black" style = {{color: "#fff"}}>BAR-SA</h1>
                  <h3>COLECCIÓN TOP DRINKS</h3>
              </div>
            </div>
            
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
