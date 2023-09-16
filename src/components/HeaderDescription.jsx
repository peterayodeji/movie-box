import IMDB from "../svg/imdb.svg";
import RottenTomatoes from "../svg/rot-tomato.svg";
import PlayIcon from "../svg/play.svg";

function HeaderDescription() {
  return (
    <div className="header__description">
      <h2 className="heading--tertiary">John Wick: Chapter 3 - Parabellum</h2>
      <div className="rating u-margin-bottom-small">
        <div className="imdb">
          <img src={IMDB} alt="imdb" />
          <div>86.0/100</div>
        </div>
        <div className="rot">
          <img src={RottenTomatoes} alt="Rotten tomatoes" />
          <div>97%</div>
        </div>
      </div>
      <div className="paragraph u-margin-bottom-small">
        Super-assassin John Wick returns with a $14 million price tag on his
        head and an army of bounty-hunting killers on his trail. After killing a
        member of the shadowy international assassin's guild, the High Table,
        John Wick is excommunicado, but the world's most ruthless hit men and
        women await his every turn.
      </div>
      <button className="btn-desc">
        <img className="play-icon" src={PlayIcon} alt="play button" />
        <div>Watch Trailer</div>
      </button>
    </div>
  );
}

export default HeaderDescription;
