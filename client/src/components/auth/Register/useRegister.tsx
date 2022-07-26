import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterFormData } from '../../../model';
import { setAlert } from '../../../redux/actions/alert';
import {
  register as signup,
  selectIsAuthenticated
} from '../../../redux/actions/auth';

export const useRegister = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password2: ''
    }
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onSubmit = async (data: RegisterFormData) => {
    const { password, password2, name, email } = data;

    if (password !== password2) {
      dispatch(setAlert('Passwords do not match', 'danger'));
    } else {
      dispatch(signup({ name, email, password }));
    }
  };

  return { isAuthenticated, register, handleSubmit, onSubmit };
};
