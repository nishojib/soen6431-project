import { FC, Fragment } from 'react';
import { ProfileType } from '../../model';

type ProfileAboutProps = {
  profile: Pick<ProfileType, 'bio' | 'skills' | 'user'>;
};

const ProfileAbout: FC<ProfileAboutProps> = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  const renderSkills = skills.map((skill, index) => (
    <div key={index} className="p-1">
      <i className="fas fa-check" /> {skill}
    </div>
  ));

  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
          <p>{bio}</p>
          <div className="line" />
        </Fragment>
      )}
      <h2 className="text-primary">Skill Set</h2>
      <div className="skills">{renderSkills}</div>
    </div>
  );
};

export default ProfileAbout;
