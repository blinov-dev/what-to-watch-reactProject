
import { Review } from '../../types/review';
import { convertStringDate } from '../../utils/utils';
type UserReviewProps = {
  review: Review;
}

function UserReview({ review }: UserReviewProps): JSX.Element {
  const { comment, date, user, rating } = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{convertStringDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default UserReview;
