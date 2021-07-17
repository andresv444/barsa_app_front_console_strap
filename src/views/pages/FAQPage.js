import React from 'react';

// reactstrap components
import {
  Container,
  ListGroupItem,
  CardBody,
  Collapse,
  Card,
  CardHeader
} from 'reactstrap';

// core components
import PagesNavbar from 'components/Navbars/PagesNavbar';
import PageHeader from 'components/Headers/PageHeader';
import DefaultFooter from 'components/Footers/DefaultFooter';
import axios from 'axios';
import { baseUrl } from '../../config';
import ButtonComponent from 'components/Button/ButtonComponent';
import ReactMarkdown from 'react-markdown';
import Loading from 'components/Loading/Loading';

function FAQPage() {
  // collapse states and functions
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  // FAQItem
  const FAQItem = ({ id, title, subtitle, content, buttons }) => (
    <>
      <CardHeader className="card-collapse" id={'heading' + id} role="tab">
        <h4 className="my-0 panel-title">
          <ListGroupItem
            tag="button"
            action
            aria-expanded={collapses.includes(id)}
            id="collapseOne"
            onClick={(e) => {
              e.preventDefault();
              changeCollapse(id);
            }}
          >
            <i className="now-ui-icons business_bulb-63 mr-3"></i>
            {title}
          </ListGroupItem>
        </h4>
      </CardHeader>
      <Collapse isOpen={collapses.includes(id)}>
        {!!subtitle && <CardBody tag="h4">{subtitle}</CardBody>}
        <CardBody tag="h5">
          {/* <div dangerouslySetInnerHTML={createMarkup(content)} /> */}
          {!!content && <ReactMarkdown>{content}</ReactMarkdown>}
          {Array.isArray(buttons) &&
            buttons.length > 0 &&
            buttons.map((button, key) => (
              <ButtonComponent
                key={key}
                id={button.id}
                title={button.title}
                href={button.href}
                icon={button.icon}
                color={button.color}
                style={button.style}
                size={button.size}
              />
            ))}
        </CardBody>
      </Collapse>
    </>
  );

  React.useEffect(() => {
    // console.log('LOAD FAQ DATA');
    async function fetchData() {
      await axios
        .get(baseUrl + '/faq-page')
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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <PagesNavbar />
      <div className="wrapper">
        <PageHeader
          title="Frequently asked Questions"
          subtitle={!!data.subtitle ? data.subtitle : ''}
          headline={!!data.headline ? data.headline : ''}
        />
        <div className="section">
          <Container>
            <div aria-multiselectable={true} id="accordion" role="tablist">
              <Card className="no-transition">
                {!!data.list &&
                  data.list.map(({ id, title, subtitle, content, buttons }) => (
                    <FAQItem
                      key={id}
                      id={id}
                      title={title}
                      subtitle={subtitle}
                      content={content}
                      buttons={buttons}
                    />
                  ))}
              </Card>
            </div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default FAQPage;
