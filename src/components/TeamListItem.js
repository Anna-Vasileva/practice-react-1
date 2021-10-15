import PropTypes from "prop-types";
import SocialList from "./SocialList";

const TeamListItem = ({ avatar, name, profession, links }) => {
  return (
    <>
      <img src={avatar} />
      <h3>{name}</h3>
      <p>{profession}</p>
      <SocialList links={links} />
    </>
  );
};

TeamListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default TeamListItem;
