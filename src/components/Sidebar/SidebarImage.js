import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'react-bootstrap';

function SidebarImage({ image }) {
  return (
    <Col
      lg={4}
      className='sidebarImage__container d-none d-lg-flex bg-primary position-absolute h-100 d-flex align-items-center justify-content-center pb-5'
    >
      <img
        className="sidebarImage__image"
        src={image}
        alt="Sidebar displaying content of page"
      />
    </Col>
  );
}

SidebarImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SidebarImage;
