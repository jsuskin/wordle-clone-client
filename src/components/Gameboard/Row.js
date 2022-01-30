const Row = ({
  rowNum,
  guess = "     ",
  submitted,
  word,
  animateBlock,
  example = false,
  highlightKeys = () => {}
}) => {
  let soln = word;

  return (
    <div className={`row row-${rowNum}${submitted && " submitted"}`}>
      {Array.from(Array(5)).map((_, idx) => {
        let blockColor;

        if (submitted && word) {
          if (soln.includes(guess[idx])) {
            const idxInSoln = soln.indexOf(guess[idx]);

            if (idxInSoln !== idx && guess[idxInSoln] === soln[idxInSoln]) {
              if (
                `${soln.slice(0, idxInSoln)}_${soln.slice(
                  idxInSoln + 1
                )}`.includes(guess[idx])
              ) {
                blockColor = " yellow";
                highlightKeys('wrong', guess[idx]);
              } else {
                blockColor = " gray";
              }
            } else {
              if (soln[idx] === guess[idx]) {
                blockColor = " green";
                highlightKeys("right", guess[idx]);
              } else {
                blockColor = " yellow";
                highlightKeys('wrong', guess[idx]);
              }

              soln = soln.slice(0, idxInSoln) + "_" + soln.slice(idxInSoln + 1);
            }
          } else {
            blockColor =
              example && !(guess === "VAGUE" && guess[idx] === "U")
                ? ""
                : " gray";
          }
        }

        return (
          <div
            key={idx}
            className={`letter-block letter-block-${idx}${blockColor}${
              animateBlock.animate &&
              animateBlock.rowNum === rowNum &&
              (animateBlock.colNum === idx || animateBlock.colNum === "full")
                ? animateBlock.animationType === "shake"
                  ? " shake"
                  : " flip"
                : ""
            }`}
          >
            {guess[idx] ? <p>{guess[idx].toUpperCase()}</p> : null}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
