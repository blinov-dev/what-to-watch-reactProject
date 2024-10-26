import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import MoviePlayer from '../../components/movie-player/movie-player';
import Title from '../../components/title/title';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { requireAuthorizationStatusAction } from '../../store/action';

function SignInPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
      navigate(AppRoute.Main);
      dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Auth));
    }
  };


  return (
    <>
      <MoviePlayer />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo light={false} />

          <Title className="page-title user-page__title">Sign in</Title>
        </header>

        <div className="sign-in user-page__content">
          <form action="" className="sign-in__form" onSubmit={handleSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" ref={loginRef} type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" ref={passwordRef} type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <Logo light />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default SignInPage;
