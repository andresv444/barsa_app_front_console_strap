import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Testimonial = ({ name, message, rating = 0 }) => {
  return (
    <>
      <Card>
        <CardBody>
          <blockquote className="blockquote blockquote-primary mb-0">
            <p>{message}</p>
            <footer className="blockquote-footer">
              <cite title={name}>{name}</cite>
              {() => {
                for (let i = 0; i < Number(rating); i += 1) {
                  return <i className="fa fa-star mr-1"></i>;
                }
              }}
              {`${rating} points`}
            </footer>
          </blockquote>
        </CardBody>
      </Card>
    </>
  );
};

export default Testimonial;
