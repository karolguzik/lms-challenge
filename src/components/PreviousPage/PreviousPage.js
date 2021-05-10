import React from 'react';
import PropTypes from 'prop-types';

import { LinkContainer } from 'react-router-bootstrap';

function PreviousPage({ path }) {
  return (
    <LinkContainer to={path}>
      <i className='far fa-2x fa-arrow-alt-circle-left'></i>
    </LinkContainer>
  );
}

PreviousPage.defaultProps = {
  path: '/',
};

PreviousPage.propTypes = {
  path: PropTypes.string,
};

export default PreviousPage;
