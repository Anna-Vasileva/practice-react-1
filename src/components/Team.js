import TeamListItem from "./TeamListItem";

const Team = ({ team }) => {
  return (
    <ul>
      {team.map(({ avatar, name, profession, links }) => {
        return (
          <li key={name}>
            <TeamListItem
              avatar={avatar}
              name={name}
              profession={profession}
              links={links}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Team;
