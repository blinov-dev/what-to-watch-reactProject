import { Link } from 'react-router-dom';

import Logo from '../logo/logo';

function Header() {
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
          <Link className="user-block__link" to="/login">Sign out</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
