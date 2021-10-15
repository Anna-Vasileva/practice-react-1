import PropTypes from "prop-types";
import FeaturesListItem from "./FeaturesListItem";

export const FeaturesList = ({ features }) => {
  return (
    <ul>
      {features.map(({ title, text }) => {
        return (
          <li key={title}>
            <FeaturesListItem title={title} text={text} />
          </li>
        );
      })}
    </ul>
  );
};

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
