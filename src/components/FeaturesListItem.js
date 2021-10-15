import PropTypes from "prop-types";

const FeaturesListItem = ({ title, text }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );
};

export default FeaturesListItem;

FeaturesListItem.prototype = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
