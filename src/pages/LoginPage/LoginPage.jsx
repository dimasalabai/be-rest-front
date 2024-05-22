import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';

import {
  // selectAuthError,
  selectAuthLoading,
} from '../../redux/auth/auth-selectors';

import styles from './login-page.module.css';

import AuthWrapper from 'shared/components/AuthWrapper/AuthWrapper';
import Loader from '../../shared/components/Loader/Loader';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);

  // const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <main className={styles.main}>
      <AuthWrapper title={'Please Log in'}>
        {authLoading && <Loader />}
        <LoginForm onSubmit={handleLogin} />
        {/* {authError && <p>{authError}</p>} */}
      </AuthWrapper>
    </main>
  );
};
export default LoginPage;
