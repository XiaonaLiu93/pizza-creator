import React from 'react';
import PropTypes from 'prop-types';
import TitleName from './style';

export default function Title({ children }) {
  return (
    <TitleName>{children}</TitleName>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
