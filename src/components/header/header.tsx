import { Link, useNavigate } from 'react-router-dom';

import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchUserInfoAction, logoutAction } from '../../store/api-actions';
import { requireAuthorizationStatusAction } from '../../store/action';
import { AuthorizationStatus } from '../../const/const';
import { AUTH_TOKEN_KEY_NAME } from '../../services/token';
import { useEffect } from 'react';
import Title from '../title/title';

type HeaderProps = {
  headerType: string;
}

function Header({ headerType }: HeaderProps): JSX.Element {

  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userInfo = useAppSelector((state) => state.userInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Проверяем статус авторизации перед выполнением запроса
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchUserInfoAction);
    }
  }, [dispatch, authorizationStatus]);

  const handleLogOut = () => {
    dispatch(logoutAction());
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
    dispatch(requireAuthorizationStatusAction(AuthorizationStatus.NoAuth));
    navigate('/');
  };

  if (authorizationStatus === 'AUTH' && userInfo) {
    const { avatarUrl, name } = userInfo;
    return (
      <header className={headerType === 'my-list' ? 'page-header user-page__head' : 'page-header film-card__head'} >
        <Logo light={false} />
        {headerType === 'my-list' ? <Title className="page-title user-page__title">My list</Title> : null}
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={avatarUrl ? avatarUrl : 'img/avatar.jpg'}
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to="/" onClick={handleLogOut}>{name ? name : 'Sign out'}</Link>
          </li>
        </ul>
      </header >
    );
  }

  return (
    <header className="page-header film-card__head">
      <Logo light={false} />
      <ul className="user-block">
        <li className="user-block__item">
          <Link className="user-block__link" to="/login">Sign in</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
