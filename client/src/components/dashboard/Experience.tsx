import { FC, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { ExperienceType } from '../../model';
import { deleteExperience } from '../../redux/actions/profile';
import formatDate from '../../utils/formatDate';

type ExperienceProps = {
  experience: ExperienceType[];
};

const Experience: FC<ExperienceProps> = ({ experience }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteExperience(id));
  };

  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => handleDelete(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
