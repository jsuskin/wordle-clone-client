import Row from './Row';
import './styles/Gameboard.css';

const Gameboard = ({ word, currentGuess, prevGuesses, animateBlock, correctLetters, setCorrectLetters }) => {
  const arr = prevGuesses.length < 6 ? [
    ...prevGuesses,
    currentGuess,
    ...Array.from(Array(5 - prevGuesses.length)),
  ] : prevGuesses;

  const highlightKeys = (place, idx) => {
    // setCorrectLetters({
    //   ...correctLetters
    // })
  }

  return (
    <div className='gameboard'>
      {arr.map((guess, idx) => (
        <Row
          key={idx}
          rowNum={idx}
          guess={guess}
          submitted={idx < prevGuesses.length}
          word={word}
          animateBlock={animateBlock}
          highlightKeys={highlightKeys}
        />
      ))}
    </div>
  );
};

export default Gameboard;
