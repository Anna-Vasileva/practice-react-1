import PropTypes from "prop-types";

const SocialList = ({ links: { instagram, twitter, facebook, linkedin } }) => {
  return (
    <ul>
      <li key="id-1">
        <a href={instagram}>instagram</a>
      </li>
      <li key="id-2">
        <a href={twitter}>twitter</a>
      </li>
      <li key="id-3">
        <a href={facebook}>facebook</a>
      </li>
      <li key="id-4">
        <a href={linkedin}>linkedin</a>
      </li>
    </ul>
  );
};

SocialList.propTypes = {
  links: PropTypes.shape({
    instagram: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialList;
