import "../styles/Stats.css";
import GuessDistributionGraph from "./GuessDistributionGraph";

const Stats = ({ reset }) => {
  const lsi = (item) => +localStorage.getItem(item);
  const numPlayed = lsi("played");
  const winPercentage = `${
    lsi("won") ? Math.floor((lsi("won") / lsi("played")) * 1000) / 10 : 0
  }`;
  const curStreak = lsi("streak");
  const maxStreak = lsi("max-streak");

  return (
    <div className='modal-content stats'>
      <h3 className='modal-heading'>STATISTICS</h3>
      <div className='modal-body'>
        <div className='stats-section stats-scores'>
          <div className='num-games-played'>
            <h2 className='stats-scores-value'>{numPlayed}</h2>
            <p className='stats-scores-label'>Played</p>
          </div>
          <div className='stats-section win-percentage'>
            <h2 className='stats-scores-value'>{winPercentage}</h2>
            <p className='stats-scores-label'>Win %</p>
          </div>
          <div className='stats-section current-streak'>
            <h2 className='stats-scores-value'>{curStreak}</h2>
            <p className='stats-scores-label'>Current Streak</p>
          </div>
          <div className='stats-section max-streak'>
            <h2 className='stats-scores-value'>{maxStreak}</h2>
            <p className='stats-scores-label'>Max Streak</p>
          </div>
        </div>
      </div>
      <h3 className='modal-heading'>GUESS DISTRIBUTION</h3>
      <div className='modal-body'>
        <div className='guess-distribution'></div>
        <GuessDistributionGraph />
      </div>
      <div className='btn-container'>
        <button className='play-again-btn' onClick={reset}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default Stats;
