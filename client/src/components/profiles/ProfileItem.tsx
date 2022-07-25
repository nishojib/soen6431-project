import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ProfileType } from '../../model';

type PartialProfileType = 'user' | 'status' | 'company' | 'location' | 'skills';

type ProfileItemProps = {
  profile: Pick<ProfileType, PartialProfileType>;
};

const ProfileItem: FC<ProfileItemProps> = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  const renderSkills = skills.slice(0, 4).map((skill, index) => (
    <li key={index} className="text-primary">
      <i className="fas fa-check" /> {skill}
    </li>
  ));

  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>{renderSkills}</ul>
    </div>
  );
};

export default ProfileItem;
