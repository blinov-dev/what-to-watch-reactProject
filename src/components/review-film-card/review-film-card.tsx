import Title from '../title/title';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import FormAddReview from '../form-add-review/form-add-review';

import { Film } from '../../types/film';
type ReviewFilmCardProps = {
  film: Film;
}

function ReviewFilmCard({ film }: ReviewFilmCardProps): JSX.Element {
  const { name, posterImage, backgroundImage, } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <Title className="visually-hidden">WTW</Title>

        <header className="page-header">
          <Logo light={false} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/login" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <FormAddReview />

    </section >
  );
}

export default ReviewFilmCard;
