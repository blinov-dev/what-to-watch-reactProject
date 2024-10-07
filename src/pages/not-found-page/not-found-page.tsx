import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found">
      <h1>Страница не найдена</h1>
      <p>Извините, но запрашиваемая страница не существует.</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
}

export default NotFoundPage;
