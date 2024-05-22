import { useSelector, useDispatch } from 'react-redux';

import Loader from '../../shared/components/Loader/Loader';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operations';

import {
  // selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';

import styles from './register-page.module.css';
import AuthWrapper from 'shared/components/AuthWrapper/AuthWrapper';

const RegisterPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  // const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main className={styles.main}>
      <AuthWrapper title={'Please Sign up'}>
        {authLoading && <Loader />}
        <RegisterForm onSubmit={handleSignup} />
      </AuthWrapper>
      {/* {authError && <p>{authError}</p>} */}
    </main>
  );
};
export default RegisterPage;
