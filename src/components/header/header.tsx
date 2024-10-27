/* eslint-disable no-console */
import { Link, useNavigate } from 'react-router-dom';

import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { requireAuthorizationStatusAction } from '../../store/action';
import { AuthorizationStatus } from '../../const/const';

function Header() {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logoutAction());
    dispatch(requireAuthorizationStatusAction(AuthorizationStatus.NoAuth));
    navigate('/');
  };

  if (authorizationStatus === 'AUTH') {
    return (
      <header className="page-header film-card__head">
        <Logo light={false} />
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to="/" onClick={handleLogOut}>Sign out</Link>
          </li>
        </ul>
      </header>
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
