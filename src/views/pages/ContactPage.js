import React from 'react';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from 'reactstrap';

// core components
import PagesNavbar from 'components/Navbars/PagesNavbar';
import PageHeader from 'components/Headers/PageHeader';
import DefaultFooter from 'components/Footers/DefaultFooter';
import axios from 'axios';
import { baseUrl } from 'config';
import ReactMarkdown from 'react-markdown';
import Loading from 'components/Loading/Loading';

function ContactPage() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

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
        .get(baseUrl + '/contact-page')
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
          title="Contact Us"
          subtitle={!!data.subtitle ? data.subtitle : ''}
          headline={!!data.headline ? data.headline : ''}
        />
        <div className="section">
          <Container>
            {/* <Row> */}
            <div className="section section-contact-us text-center">
              <Container>
                {!!data.title && <h2 className="title">{data.title}</h2>}
                {!!data.description && <ReactMarkdown>{data.description}</ReactMarkdown>}
                <Row>
                  <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                    <InputGroup
                      className={'input-lg' + (firstFocus ? ' input-group-focus' : '')}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="First Name..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={'input-lg' + (lastFocus ? ' input-group-focus' : '')}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={'input-lg' + (lastFocus ? ' input-group-focus' : '')}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Mobile..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <div className="textarea-container">
                      <Input
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="6"
                        type="textarea"
                      ></Input>
                    </div>
                    <div className="send-button">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="lg"
                      >
                        Send Message
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* </Row> */}
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ContactPage;
