import React from 'react';

// core components
import IndexNavbar from 'components/Navbars/IndexNavbar';
import IndexHeader from 'components/Headers/IndexHeader';
import DarkFooter from 'components/Footers/DarkFooter';

// sections for this page
import axios from 'axios';
import { baseUrl } from 'config';
import ImageCarousel from 'components/Carousel/ImageCarousel';
import Loading from 'components/Loading/Loading';
import TextBlock from 'components/TextBlock/TextBlock';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import "../assets/css/index.css"

function Index() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    document.body.classList.add('index-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('index-page');
      document.body.classList.remove('sidebar-collapse');
    };
  });

  React.useEffect(() => {
    // console.log('LOAD FAQ DATA');
    async function fetchData() {
      await axios
        .get(baseUrl + '/home-page')
        .then((res) => {
          // console.log(res.data);
          setLoading(false);
          if (res.status === 200) setData(res.data);
        })
        .catch((err) => {
          console.error(err.message);
        });
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* navbar Menu */}
      <IndexNavbar />
      <div className="wrapper">
        {/* Image Background bar */}
        {/* <IndexHeader image={!!data.coverImage ? data.coverImage.url : null} /> */}
        <IndexHeader image='https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />

        <div className="main" id="mainDiv">
          <div>
            {/* FIRST */}
            {/* Text and image of app */}
            <div style ={{backgroundColor:"#f0f0f0"}}>
            <Container className="background-1" >
              <Row className="py-4 d-flex justify-content-center">
                <Col xs="6" md = '6' sm = "12">
                  {/* text and title */}
                  <div className="text-center" >
                  {!!data.downloadTextBlock && (
                    <TextBlock
                      id={data.downloadTextBlock.id}
                      title={data.downloadTextBlock.title}
                      titlecolor={'blacks'}
                      subtitle={data.downloadTextBlock.subtitle}
                      content={data.downloadTextBlock.content}
                      buttons={data.downloadTextBlock.buttons}
                    />
                  )}

                    {/* button of download */}
                    <Row className="my-5 d-flex justify-content-center">
                      {!!data.downloadImageButtons &&
                        Array.isArray(data.downloadImageButtons) &&
                        data.downloadImageButtons.map((item) => {
                          return (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              key={item.id}
                            >
                              <img
                                src={item.image.url}
                                style={{ height: '45px', margin: '15px' }}
                                alt={item.image.alternativeText}
                              />
                            </a>
                          );
                        })}
                    </Row>
                  </div>
                </Col>
                {/* Image of the app */}
                <Col xs="6" md = '6' sm = "12">
                  <div>
                    <img
                      src="images/iphone-removebg.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>
            </div>

            {/* SECOND */}
            <div >
            <Container className="background-1" >

              {/* Image of the app */}
              <Row className="my-5 d-flex justify-content-center">
                <Col xs="6" md = '6' sm = "12">
                  <div>
                    <img
                      src="https://products2.imgix.drizly.com/homepage_you_want_it_we_got_it.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=png&q=75&w=1340"
                      alt=""
                    />
                  </div>
                </Col>
                
                {/* text and title */}
                <Col xs="6" md = '6' sm = "12">
                  <div className="text-center">
                  {!!data.downloadTextBlock && (
                    <TextBlock
                      id={data.downloadTextBlock.id}
                      title='You want it? We got it.'
                      titlecolor={'black1'}
                      subtitle='WE HAVE EVERY LICOR DO YOU WANT'
                      content="Rosé? Check. Tito's? Check. That one killer pale ale you tried the other day? Check. We have the biggest selection for on-demand alcohol in the history of ever."
                      buttons={data.downloadTextBlock.buttons}
                    />
                  )}
                  </div>
                </Col>
                
              </Row>
            </Container>
            </div>

            
            
            {/* slice of Images */}
            <div style ={{backgroundColor:"#f0f0f0"}}>
              <div>
              <Row className="my-5 d-flex justify-content-center">
                <ImageCarousel
                  images={
                    !!data.imageCarousel && Array.isArray(data.imageCarousel.images)
                      ? data.imageCarousel.images
                      : []
                  }
                />
              </Row>
              </div>
            </div>

            {/* services in cards */}
            <div className="my-5 d-flex justify-content-center">
              {/* <h1>Hello World</h1> */}
            <Row className="my-5 d-flex justify-content-center">
              {!!data.services &&
                Array.isArray(data.services) &&
                data.services.map((service) => (
                  <Card style={{ width: '20rem', margin: '1rem' }} key={service.id}>
                    <CardBody>
                      {!!service.title && (
                        <CardTitle tag="h4">
                          {!!service.nucleoIcon && (
                            <i className={`now-ui-icons mr-2 ${service.nucleoIcon}`}></i>
                          )}
                          {service.title}
                        </CardTitle>
                      )}
                      <CardText>{service.description}</CardText>
                    </CardBody>
                  </Card>
                ))}
            </Row>
            </div>
            {/* Text of the Download the App */}
            <div style ={{backgroundColor:"#f0f0f0"}} >
            <Container >
            <Row className=" pb-5">
              <Col className="my-5 pb-5">
                <div className="text-center">
                  {!!data.featured && (
                      <TextBlock
                        id={data.featured.id}
                        title={data.featured.title}
                        titlecolor='danger'
                        subtitle={data.featured.subtitle}
                        content={data.featured.content}
                        // buttons={data.featured.buttons}
                      />
                    )}
                </div>
              </Col>
            </Row>
            </Container>
            </div>
            {/* Image of the table
            <Row className="className=my-5 d-flex justify-content-center">
              <Images />
              {!!data.sideImage && (
                <div className="section section-images my-5">
                  <Container>
                    <Row className="my-4">
                      <Col md="12">
                        <div className="hero-images-container">
                          <img alt="..." src={data.sideImage.url}></img>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              )}
            </Row> */}

            {/* Download Buttons */}
          </div>
          {/* <Download /> */}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
