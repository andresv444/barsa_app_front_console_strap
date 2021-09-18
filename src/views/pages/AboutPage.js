import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import PagesNavbar from 'components/Navbars/PagesNavbar';
import PageHeader from 'components/Headers/PageHeader';
import DefaultFooter from 'components/Footers/DefaultFooter';
import axios from 'axios';
import { baseUrl } from 'config';
import Loading from 'components/Loading/Loading';
import TextBlock from 'components/TextBlock/TextBlock';

function AboutPage() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    document.body.classList.add('profile-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove('profile-page');
      document.body.classList.remove('sidebar-collapse');
    };
  }, []);

  React.useEffect(() => {
    // console.log('LOAD FAQ DATA');
    async function fetchData() {
      await axios
        .get(baseUrl + '/about-page')
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

  // const textBlockI1 = data.content[0]
  // const textBlockI2 = data.content[1]

  return (
    <>
      {/* Navbar */}
      <PagesNavbar />
      <div className="wrapper">
        <PageHeader
          title="About Us"
          subtitle={!!data.subtitle ? data.subtitle : ''}
          headline={!!data.headline ? data.headline : ''}
        />
        <div className="section section-about-us">
          <Container>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  {!!data.image1 && (
                    <div
                      className="image-container image-left"
                      style={{
                        backgroundImage: 'url(' + data.image1.url + ')'
                      }}
                    ></div>
                  )}
                  {!!data.image2 && (
                    <div
                      className="image-container"
                      style={{
                        backgroundImage: 'url(' + data.image2.url + ')'
                      }}
                    ></div>
                  )}
                </Col>

                <Col
                  md="6"
                  className="mt-5"
                  style={{ display: 'grid', alignItems: 'center' }}
                >
                  <div>
                      {/* <h1>
                        Nuestra Mision
                      </h1> */}

                    {!!data.image3 && (
                      <div
                        className="image-container image-right"
                        style={{
                          backgroundImage: 'url(' + data.image3.url + ')'
                        }}
                      ></div>
                    )}
                  </div>
                  <div style={{ marginTop: '50px' }} />
                  {/* <div style={{ marginTop: '250px' }} /> */}
                  {!!data.mission && (
                    <div>
                      <TextBlock
                        id={data.mission.id}
                        title={'Nuestra Mision'}
                        titlecolor={data.mission.titlecolor}
                        subtitle={data.mission.subtitle}
                        content={data.mission.content}
                        buttons={[
                          {
                            color: 'neutral',
                            style: 'round',
                            size: 'large',
                            _id: '60f0545154a45f4f585acb79',
                            title: 'Inicio',
                            href: '#/',
                            __v: 0,
                            id: '60f0545154a45f4f585acb79'
                          }
                        ]}
                      />
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                {!!data.content &&
                  Array.isArray(data.content) &&
                  data.content.map((textBlock) => {
                    if (textBlock['__component'] === 'page.text-block') {
                      return (
                        <Col md="6" className="text-left">
                          <TextBlock
                            // key={textBlock.id}
                            // id={textBlock.id}
                            title={'Nuestra Vision'}
                            titlecolor={textBlock.titlecolor}
                            subtitle={textBlock.subtitle}
                            content={textBlock.content}
                          />
                        </Col>
                      );
                    } else {
                      return null;
                    }
                  })}
                {/* <Col md="12" className="ml-5 text-center">
                  <TextBlock
                    // key={textBlock.id}
                    // id={textBlock.id}
                    title={'Nuestra mision'}
                    titlecolor={textBlockI1.titlecolor}
                    subtitle={textBlockI1.subtitle}
                    content={textBlockI1.content}
                  />
                </Col> */}
              </Row>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default AboutPage;
