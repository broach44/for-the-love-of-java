import PropTypes from 'prop-types';

const shopShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired,
});

export default { shopShape };
