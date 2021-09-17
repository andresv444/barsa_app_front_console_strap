import React from 'react';
import { Button } from 'reactstrap';

const ButtonComponent = ({ id, title, href, icon, color, style, size }) => {
  //console.log(id, title, href, icon, color, style, size );
  let className = 'mr-1 btn-warning';
  let props = {
    id,
    href
  };
  if (size === 'small') props['size'] = 'sm';
  if (size === 'large') props['size'] = 'lg';
  if (color === 'neutral') {
    className = 'btn-neutral';
    props['color'] = 'default';
  } else {
    props['color'] = color;
  }
  if (style === 'round') className += ' btn-round';
  if (style === 'outline') props['outline'] = true;
  props['className'] = className;
  return (
    <Button {...props}>
      {!!icon && <i className={`now-ui-icons ${icon}`}></i>}
      {title}
    </Button>
  );
};

export default ButtonComponent;
