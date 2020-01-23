import PropTypes from 'prop-types';

const logShape = PropTypes.shape({
  id: PropTypes.string,
  comments: PropTypes.string.isRequired,
  dateOfVisit: PropTypes.string.isRequired,
  drinksConsumed: PropTypes.string.isRequired,
  foodConsumed: PropTypes.string.isRequired,
  purposeOfVisit: PropTypes.string.isRequired,
  shopId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  drinkRating: PropTypes.number.isRequired,
  environmentRating: PropTypes.number.isRequired,
  foodRating: PropTypes.number.isRequired,
  pricingRating: PropTypes.number.isRequired,
  techRating: PropTypes.number.isRequired,
  wifiRating: PropTypes.number.isRequired,
  wouldRecommend: PropTypes.bool.isRequired,
});

export default { logShape };
