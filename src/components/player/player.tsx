
import { Film } from '../../types/film';
type PlayerProps = {
  film: Film;
  bigPlayer: boolean;
}


function Player({ film, bigPlayer }: PlayerProps): JSX.Element {
  const { posterImage, videoLink } = film;

  // eslint-disable-next-line no-console
  console.log(film);

  return (
    <div className={bigPlayer ? 'player' : ''}>
      <video className="player__video" poster={posterImage} controls muted autoPlay>
        <source src={videoLink} type="video/mp4" />
        Ваш браузер не поддерживает встроенные видео.
      </video>

      {/* <button type="button" className="player__exit">Exit</button> */}

    </div >
  );

}

export default Player;
