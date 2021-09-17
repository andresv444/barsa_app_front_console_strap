import React from 'react';
import {
  Card,
  CardBody,
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
          {!!description && <CardText>{description}</CardText>}
        </CardBody>
      </Card>
    </>
  );
};

export default Service;
