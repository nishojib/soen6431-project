import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFormData } from '../../../model';
import { login, selectIsAuthenticated } from '../../../redux/actions/auth';

export const useLogin = () => {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { email: '', password: '' }
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data.email, data.password));
  };

  return { isAuthenticated, register, handleSubmit, onSubmit };
};
