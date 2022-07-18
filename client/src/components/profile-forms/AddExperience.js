import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import {useForm} from 'react-hook-form';
const AddExperience = ({ addExperience }) => {
  const navigate = useNavigate();
  const initialState={
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  }
  const [formData, setFormData] = useState(initialState);

  const { register,handleSubmit,reset} = useForm({
    defaultValues:formData
  });
  
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const  onSubmit=(data) => {
      addExperience(formData, data, navigate);
      reset();
    };

  return (
    <section className="container">
      <h1 className="large text-primary">Add An Experience</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}>
        {/* ----------------
         onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData, navigate);
        }}
      > -------------------
      */}
        <div className="form-group">
          <Input
            type="text"
            placeholder="* Job Title"
            required
            {...register("title",{required:true})}
            onChange={onChange}
          />
          
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="* Company"
            {...register("company",{required:true})}
          />
        </div>
        <div className="form-group">
          <Input
            type="text"
            placeholder="Location"
            {...register("location")}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <Input 
            type="date" 
            {...register("from")}
          />
        </div>
        <div className="form-group">
          <p>
            <Input
              type="checkbox"
              // name="current"
              // checked={current}
              // value={current}
              // onChange={() => {
              //   setFormData({ ...formData, current: !current });
              // }}
              {...register("current")}
            />{' '}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <Input
            type="date"
            // name="to"
            // value={to}
            // onChange={onChange}
            // disabled={current}
            {...register("to")}
          />
        </div>
        <div className="form-group">
          <textarea
            // name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            // value={description}
            // onChange={onChange}
            {...register('text',{required:true})}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);


const Input = ({ type = 'text', placeholder, ...rest }) => {
  return (
    <input type={type} placeholder={placeholder} {...rest} />
  )
}