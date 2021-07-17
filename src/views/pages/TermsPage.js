import React from 'react';

// reactstrap components
import { Container, Row } from 'reactstrap';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

// core components
import PagesNavbar from 'components/Navbars/PagesNavbar';
import PageHeader from 'components/Headers/PageHeader';
import DefaultFooter from 'components/Footers/DefaultFooter';
import { baseUrl } from 'config';
import Loading from 'components/Loading/Loading';

function TermsPage() {
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
        .get(baseUrl + '/terms-and-conditions')
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
        <PageHeader title="Terms and Conditions" />
        <div className="section">
          <Container>
            <h3 className="title">{!!data.title && data.title}</h3>
            {/* <h5 className="description">
              An artist of considerable range, Ryan — the name taken by Melbourne-raised,
              Brooklyn-based Nick Murphy — writes, performs and records all of his own
              music, giving it a warm, intimate feel with a solid groove structure. An
              artist of considerable range.
            </h5> */}
            <Row>
              {!!data.content && (
                <div className="mx-4">
                  <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>
              )}
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default TermsPage;
