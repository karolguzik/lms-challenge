import React from 'react';
import PropTypes from 'prop-types';

import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer';

function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main className="position-relative min-vh-100">{children}</main>
      <Footer />
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.array.isRequired,
};

export default MainTemplate;
