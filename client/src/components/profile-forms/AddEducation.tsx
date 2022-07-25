import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { EducationFormData } from '../../model';
import { addEducation } from '../../redux/actions/profile';

const AddEducation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm<EducationFormData>({
    defaultValues: {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: ''
    }
  });

  const onSubmit = (data: EducationFormData) => {
    dispatch(addEducation(data, navigate));
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any school or bootcamp that you
        have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            {...register('school', { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            {...register('degree', { required: true })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            {...register('fieldofstudy')}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" {...register('from')} />
        </div>
        <div className="form-group">
          <p>
            <input type="checkbox" {...register('current')} /> Current School
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
            placeholder="Program Description"
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

export default AddEducation;
