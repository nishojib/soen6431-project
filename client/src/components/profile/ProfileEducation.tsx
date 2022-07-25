import { FC } from 'react';
import { EducationType } from '../../model';
import formatDate from '../../utils/formatDate';

type ProfileEducationProps = {
  education: EducationType;
};

const ProfileEducation: FC<ProfileEducationProps> = ({
  education: { school, degree, fieldofstudy, to, from, description }
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Degree: </strong> {degree}
    </p>
    <p>
      <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

export default ProfileEducation;
