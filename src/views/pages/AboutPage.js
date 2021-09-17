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

  return (
    <>
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
                <Col md="6" className="mt-5">
                  {!!data.image3 && (
                    <div
                      className="image-container image-right"
                      style={{
                        backgroundImage: 'url(' + data.image3.url + ')'
                      }}
                    ></div>
                  )}
                  <div style={{ marginTop: '250px' }} />
                  {!!data.mission && (
                    <TextBlock
                      id={data.mission.id}
                      title={data.mission.title}
                      titlecolor={data.mission.titlecolor}
                      subtitle={data.mission.subtitle}
                      content={data.mission.content}
                      buttons={data.mission.buttons}
                    />
                  )}
                </Col>
              </Row>
              <Row>
                <Col md="12" className="ml-5 text-center">
                  {!!data.content &&
                    Array.isArray(data.content) &&
                    data.content.map((textBlock) => {
                      if (textBlock['__component'] === 'page.text-block') {
                        return (
                          <TextBlock
                            key={textBlock.id}
                            id={textBlock.id}
                            title={textBlock.title}
                            titlecolor={textBlock.titlecolor}
                            subtitle={textBlock.subtitle}
                            content={textBlock.content}
                            buttons={textBlock.buttons}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        {/* <div className="section section-team text-center">
          <Container>
            <h2 className="title">Here is our team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require('assets/img/avatar.jpg').default}
                    ></img>
                    <h4 className="title">Romina Hadid</h4>
                    <p className="category text-info">Model</p>
                    <p className="description">
                      You can write here details about one of your team members. You can
                      give more details about what they do. Feel free to add some{' '}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{' '}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require('assets/img/ryan.jpg').default}
                    ></img>
                    <h4 className="title">Ryan Tompson</h4>
                    <p className="category text-info">Designer</p>
                    <p className="description">
                      You can write here details about one of your team members. You can
                      give more details about what they do. Feel free to add some{' '}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{' '}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require('assets/img/eva.jpg').default}
                    ></img>
                    <h4 className="title">Eva Jenner</h4>
                    <p className="category text-info">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members. You can
                      give more details about what they do. Feel free to add some{' '}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        links
                      </a>{' '}
                      for people to be able to follow them outside the site.
                    </p>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div> */}
        <DefaultFooter />
      </div>
    </>
  );
}

export default AboutPage;