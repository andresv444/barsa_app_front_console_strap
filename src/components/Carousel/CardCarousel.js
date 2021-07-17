import React from 'react';

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Card,
  CardTitle,
  CardText,
  CardBody
} from 'reactstrap';

// core components

const items = [
  {
    id: '60f049a616bf1d1828820b74',
    title: 'Database Migration',
    description: 'We will provide top Database Migration services for your every need',
    nucleoIcon: 'files_box'
  },
  {
    id: '60f049a616bf1d1828820b75',
    title: '24x7 Service',
    description: 'We work daily!',
    nucleoIcon: 'travel_info'
  },
  {
    id: '60f049a616bf1d18288dsvds20b75',
    title: '24x7 Service',
    description: 'We work daily!',
    nucleoIcon: 'travel_info'
  },
  {
    id: '60f049a616bf1d1828820bsdvds5',
    title: '24x7 Service',
    description: 'We work daily!',
    nucleoIcon: 'travel_info'
  },
  {
    id: '60f049a616bf1d182sdvsdv8820b75',
    title: '24x7 Service',
    description: 'We work daily!',
    nucleoIcon: 'travel_info'
  }
];

function CardCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" md="12">
              <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
                      {/* <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div> */}
                      <Card>
                        <CardBody>
                          <CardTitle tag="h4">Card title</CardTitle>
                          <CardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                          </CardText>
                        </CardBody>
                      </Card>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CardCarousel;
