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
        <IndexHeader image={!!data.coverImage ? data.coverImage.url : null} />

        <Container className="main">
          <div>
            {/* Text and image of app */}
            <Container className="background-1" style ={{backgroundColor:"yellow"}}>
              <Row className="my-5 d-flex justify-content-center">
                <Col xs="6">
                  {/* text and title */}
                  <div className="text-center">
                    {!!data.featured && (
                      <TextBlock
                        id={data.featured.id}
                        title={data.featured.title}
                        titlecolor={data.featured.titlecolor}
                        subtitle={data.featured.subtitle}
                        content={data.featured.content}
                        // buttons={data.featured.buttons}
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
                <Col xs="6">
                  <div>
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drizly-app-1579716002.jpg?crop=1xw:1xh;center,top&resize=768:*"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </Container>

            {/* slice of Images */}
            <Row className="mx-auto">
              <ImageCarousel
                images={
                  !!data.imageCarousel && Array.isArray(data.imageCarousel.images)
                    ? data.imageCarousel.images
                    : []
                }
              />
            </Row>

            {/* services in cards */}
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

            {/* Text of the Download the App */}
            <Row className="my-5 pb-5">
              <Col className="my-5 pb-5">
                <div className="text-center">
                  {!!data.downloadTextBlock && (
                    <TextBlock
                      id={data.downloadTextBlock.id}
                      title={data.downloadTextBlock.title}
                      titlecolor={data.downloadTextBlock.titlecolor}
                      subtitle={data.downloadTextBlock.subtitle}
                      content={data.downloadTextBlock.content}
                      buttons={data.downloadTextBlock.buttons}
                    />
                  )}
                </div>
              </Col>
            </Row>

            {/* Image of the table */}
            <Row className="className=my-5 d-flex justify-content-center">
              {/* <Images /> */}
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
            </Row>

            {/* Download Buttons */}
            <Row className="my-5 d-flex justify-content-center">
              {!!data.downloadImageButtons &&
                Array.isArray(data.downloadImageButtons) &&
                data.downloadImageButtons.map((item) => {
                  return (
                    <a href={item.link} target="_blank" rel="noreferrer" key={item.id}>
                      <img
                        src={item.image.url}
                        style={{ height: '60px', margin: '20px' }}
                        alt={item.image.alternativeText}
                      />
                    </a>
                  );
                })}
            </Row>
          </div>
          {/* <Download /> */}
        </Container>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
