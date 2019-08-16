import PropTypes from 'prop-types';

export default {
  name: PropTypes.shape({
    value: PropTypes.string,
    showError: PropTypes.bool,
  }),
  email: PropTypes.shape({
    value: PropTypes.string,
    showError: PropTypes.bool,
  }),
  confirmEmail: PropTypes.shape({
    value: PropTypes.string,
    showError: PropTypes.bool,
  }),
  address: PropTypes.shape({
    value: PropTypes.string,
    showError: PropTypes.bool,
  }),
  postcode: PropTypes.shape({
    value: PropTypes.string,
    showError: PropTypes.bool,
  }),
  contactNumber: PropTypes.shape({
    value: PropTypes.string,
    showError: PropTypes.bool,
  }),
};
