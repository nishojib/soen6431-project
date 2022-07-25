import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ExperienceFormData } from '../../model';
import { addExperience } from '../../redux/actions/profile';

const AddExperience: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<ExperienceFormData>({
    defaultValues: {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: ''
    }
  });

  const onSubmit = (data: ExperienceFormData) => {
    dispatch(addExperience(data, navigate));
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Job Title"
            {...register('title', { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Company"
            {...register('company', { required: true })}
          />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" {...register('location')} />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" {...register('from')} />
        </div>
        <div className="form-group">
          <p>
            <input type="checkbox" {...register('current')} /> Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" {...register('to')} />
        </div>
        <div className="form-group">
          <textarea
            cols={30}
            rows={5}
            placeholder="Job Description"
            {...register('description')}
          />
        </div>
        <button type="submit" className="btn btn-primary my-1">
          Submit
        </button>
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default AddExperience;
