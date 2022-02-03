import "./styles/Keyboard.css";

const Keyboard = ({
  words,
  currentGuess,
  setCurrentGuess,
  prevGuesses,
  setPrevGuesses,
  won,
  correctLetters,
  wrongLetters,
  animateBlocks,
}) => {
  // document.addEventListener("keyup", ({ key }) => {
  //   if (
  //     (currentGuess.length < 5 &&
  //     (key.length === 1 && key.match(/[A-Za-z]/))) ||
  //       key.match(/enter|backspace/i)
  //   ) {
  //     handleClick(key.toLowerCase());
  //   }
  // });

  const handleClick = (k) => {
    if (!won) {
      let guess;

      if (k === "enter") {
        if (currentGuess.length < 5 || !words.includes(currentGuess)) {
          animateBlocks(prevGuesses.length, "full");
          return;
        } else {
          setPrevGuesses([...prevGuesses, currentGuess]);
          guess = "";
        }
      } else if (k === "backspace") {
        guess = currentGuess.slice(0, -1);
      } else if (currentGuess.length >= 5) {
        animateBlocks(prevGuesses.length, "full");
        return;
      } else {
        guess = currentGuess + k;
      }

      if ([...prevGuesses, currentGuess].length <= 6) setCurrentGuess(guess);
    }
  };

  return (
    <div className='keyboard-container'>
      <div className='keyboard'>
        <div className='keyboard-row keyboard-row-1'>
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
            <button
              className={`keyboard-key keyboard-key-${letter.toLowerCase()}${
                wrongLetters.includes(letter.toLowerCase())
                  ? " darken"
                  : correctLetters.rightPlace.includes(letter.toLowerCase())
                  ? " green"
                  : correctLetters.wrongPlace.includes(letter.toLowerCase())
                  ? " yellow"
                  : ""
              }`}
              key={letter.toLowerCase()}
              value={letter.toLowerCase()}
              onClick={() => handleClick(letter.toLowerCase())}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className='keyboard-row keyboard-row-2'>
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
            <button
              className={`keyboard-key keyboard-key-${letter.toLowerCase()}${
                wrongLetters.includes(letter.toLowerCase())
                  ? " darken"
                  : correctLetters.rightPlace.includes(letter.toLowerCase())
                  ? " green"
                  : correctLetters.wrongPlace.includes(letter.toLowerCase())
                  ? " yellow"
                  : ""
              }`}
              key={letter.toLowerCase()}
              value={letter.toLowerCase()}
              onClick={() => handleClick(letter.toLowerCase())}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className='keyboard-row keyboard-row-3'>
          {[
            "ENTER",
            "Z",
            "X",
            "C",
            "V",
            "B",
            "N",
            "M",
            <img
              src={`https://img.icons8.com/external-prettycons-lineal-prettycons/26/${
                localStorage.getItem("theme") === "dark" ? "ffffff" : "000000"
              }/external-backspace-essentials-prettycons-lineal-prettycons.png`}
              alt='backspace'
            />,
          ].map((letter) => {
            const k =
              typeof letter === "string" ? letter.toLowerCase() : "backspace";
            return (
              <button
                className={`keyboard-key keyboard-key-${k}${
                  wrongLetters.includes(k)
                    ? " darken"
                    : correctLetters.rightPlace.includes(k)
                    ? " green"
                    : correctLetters.wrongPlace.includes(k)
                    ? " yellow"
                    : ""
                }`}
                key={k}
                value={k}
                onClick={() => handleClick(k)}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
