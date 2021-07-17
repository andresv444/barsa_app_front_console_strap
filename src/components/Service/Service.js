import React from 'react';
import {
  Card,
  CardBody,
  //CardLink,
  //CardSubtitle,
  CardText,
  CardTitle
} from 'reactstrap';

const Service = ({ title, nucleoIcon, description }) => {
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <CardBody>
          {!!title && (
            <CardTitle tag="h4">
              {!!nucleoIcon && <i className={`now-ui-icons ${nucleoIcon} mr-2`}></i>}
              {title}
            </CardTitle>
          )}
          {/* <CardSubtitle className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle> */}
          {!!description && <CardText>{description}</CardText>}
        </CardBody>
      </Card>
    </>
  );
};

export default Service;
