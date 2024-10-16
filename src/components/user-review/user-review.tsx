
import { Review } from '../../types/review';
type UserReviewProps = {
  review: Review;
}

function UserReview(review: UserReviewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">1</p>

        <footer className="review__details">
          <cite className="review__author">1</cite>
          <time className="review__date" dateTime="">1</time>
        </footer>
      </blockquote>

      <div className="review__rating">1</div>
    </div>
  );
}

export default UserReview;
