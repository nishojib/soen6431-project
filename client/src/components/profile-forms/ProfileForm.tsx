import { FC, Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { ProfileFormData, ProfileType } from '../../model';
import {
  createProfile,
  getCurrentProfile,
  selectProfile,
  selectProfileLoading
} from '../../redux/actions/profile';

const initialValues: ProfileFormData = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm: FC = () => {
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const dispatch = useDispatch();
  const profile: ProfileType = useSelector(selectProfile);
  const profileLoading: boolean = useSelector(selectProfileLoading);
  const creatingProfile = useMatch('/create-profile');
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<ProfileFormData>({
    defaultValues: initialValues
  });

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) dispatch(getCurrentProfile());

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!profileLoading && profile) {
      const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        social
      } = profile;

      const profileData = {
        company,
        website,
        location,
        status,
        githubusername,
        bio,
        skills: skills.join(', '),
        ...social
      };

      reset(profileData);
    }
  }, [profileLoading, dispatch, profile, reset]);

  const onSubmit = (data: ProfileFormData) => {
    dispatch(createProfile(data, navigate, profile ? true : false));
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <select {...register('status', { required: true })}>
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" {...register('company')} />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" {...register('website')} />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" {...register('location')} />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            {...register('skills', { required: true })}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            {...register('githubusername')}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            {...register('bio')}
          />
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            className="btn btn-light"
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className="form-group social-input">
              <i className="fab fa-twitter fa-2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                {...register('twitter')}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-facebook fa-2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                {...register('facebook')}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-youtube fa-2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                {...register('youtube')}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-linkedin fa-2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                {...register('linkedin')}
              />
            </div>

            <div className="form-group social-input">
              <i className="fab fa-instagram fa-2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                {...register('instagram')}
              />
            </div>
          </Fragment>
        )}

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

export default ProfileForm;
