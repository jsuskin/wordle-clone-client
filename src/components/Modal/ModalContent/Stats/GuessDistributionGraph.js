const GuessDistributionGraph = () => {
  const guessDist = JSON.parse(localStorage.getItem("moves-distribution")) || [];
  const freqAmt = (moves) => guessDist.filter((g) => g === moves).length;
  const freqAmts = [1,2,3,4,5,6].map(moves => freqAmt(moves));
  const max = Math.max(...freqAmts);
  const min = Math.min(...freqAmts);
  const scale = max - min;
  const lastNumMoves = guessDist[guessDist.length - 1];

  return (
    <div className='guess-distribution-graph'>
      <div className='guess-freq'>
        <p className='freq-bar-label'>1</p>
        <div className={`freq-bar${lastNumMoves === 1 ? ' green' : ''}`} style={{width: `${100 * freqAmts[0] / scale}%`}}>
          <span className='freq-bar-amt'>{freqAmts[0]}</span>
        </div>
      </div>
      <div className='guess-freq'>
        <p className='freq-bar-label'>2</p>
        <div className={`freq-bar${lastNumMoves === 2 ? ' green' : ''}`} style={{width: `${100 * freqAmts[1] / scale}%`}}>
          <span className='freq-bar-amt'>{freqAmts[1]}</span>
        </div>
      </div>
      <div className='guess-freq'>
        <p className='freq-bar-label'>3</p>
        <div className={`freq-bar${lastNumMoves === 3 ? ' green' : ''}`} style={{width: `${100 * freqAmts[2] / scale}%`}}>
          <span className='freq-bar-amt'>{freqAmts[2]}</span>
        </div>
      </div>
      <div className='guess-freq'>
        <p className='freq-bar-label'>4</p>
        <div className={`freq-bar${lastNumMoves === 4 ? ' green' : ''}`} style={{width: `${100 * freqAmts[3] / scale}%`}}>
          <span className='freq-bar-amt'>{freqAmts[3]}</span>
        </div>
      </div>
      <div className='guess-freq'>
        <p className='freq-bar-label'>5</p>
        <div className={`freq-bar${lastNumMoves === 5 ? ' green' : ''}`} style={{width: `${100 * freqAmts[4] / scale}%`}}>
          <span className='freq-bar-amt'>{freqAmts[4]}</span>
        </div>
      </div>
      <div className='guess-freq'>
        <p className='freq-bar-label'>6</p>
        <div className={`freq-bar${lastNumMoves === 6 ? ' green' : ''}`} style={{width: `${100 * freqAmts[5] / scale}%`}}>
          <span className='freq-bar-amt'>{freqAmts[5]}</span>
        </div>
      </div>
    </div>
  );
};

export default GuessDistributionGraph;