import Row from "../../Gameboard/Row";
import './styles/Instructions.css'

const Instructions = () => {
  return (
    <div className='modal-content instructions-container'>
      <h3 className='modal-heading'>HOW TO PLAY</h3>
      <div className='modal-body instructions'>
        <p>
          Guess the{" "}
          <span style={{ fontWeight: 700 }}>
            WOR
            <span style={{ position: "relative" }}>
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                .split("")
                .map((l) => (
                  <span key={l} style={{ position: "absolute", left: 0 }}>
                    {l}
                  </span>
                ))}
            </span>
            &nbsp;&nbsp;&nbsp;LE
          </span>{" "}
          in 6 tries.
        </p>
        <br />
        <p>
          Each guess must be a valid 5 letter word. Hit the enter button to
          submit.
        </p>
        <br />
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <br />
        <hr />
        <br />
        <h4 style={{ padding: "5px 0 20px 0" }}>Examples</h4>
        <div className='examples'>
          <div className='example example-1'>
            <Row
              rowNum={0}
              guess={"WEARY"}
              submitted={true}
              word={"WXXXX"}
              animateBlock={{animate: true, rowNum: 2, colNum: 3, animationType: 'flip'}}
              example={true}
            />
            <p>
              The letter <span style={{ fontWeight: 800 }}>W</span> is in the
              word and in the correct spot.
            </p>
          </div>

          <div className='example example-2'>
            <Row
              rowNum={1}
              guess={"PILLS"}
              submitted={true}
              word={"IXXXX"}
              animateBlock={{animate: true, rowNum: 2, colNum: 3, animationType: 'flip'}}
              example={true}
            />
            <p>
              The letter <span style={{ fontWeight: 800 }}>I</span> is in the
              word but in the wrong spot.
            </p>
          </div>
          <div className='example example-3'>
            <Row
              rowNum={2}
              guess={"VAGUE"}
              submitted={true}
              word={"XXXXX"}
              animateBlock={{}}
              example={true}
            />
            <p>
              The letter <span style={{ fontWeight: 800 }}>U</span> is not in
              the word in any spot.
            </p>
          </div>
          <br />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Instructions;
