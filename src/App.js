import { useState, useEffect } from "react";
import Keyboard from "./components/Keyboard/Keyboard";
import Gameboard from "./components/Gameboard/Gameboard";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Instructions from "./components/Modal/ModalContent/Instructions";
import Stats from "./components/Modal/ModalContent/Stats/Stats";
import Settings from "./components/Modal/ModalContent/Settings";
import Details from "./components/Testing/Details";
import { allWords as wordsList } from "../src/assets/words";
import "./App.css";

function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState(null);
  const [currentGuess, setCurrentGuess] = useState("");
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [won, setWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("instructions");
  const [settings, setSettings] = useState({
    hardMode: false,
    darkMode: false,
    colorBlindMode: false,
  });
  const [animateBlock, setAnimateBlock] = useState({
    animate: false,
    rowNum: -1,
    colNum: -1,
    animationType: "shake",
  });
  const [correctLetters, setCorrectLetters] = useState({
    rightPlace: [],
    wrongPlace: [],
  });

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark");

    const setColorBlindMode =
      localStorage.getItem("cb") ||
      (window.matchMedia("(prefers-contrast: more)").matches ? "more" : "less");

    if (storedTheme)
      setSettings({ ...settings, darkMode: storedTheme === "dark" });

    if (setColorBlindMode)
      setSettings({
        ...settings,
        colorBlindMode: setColorBlindMode === "more",
      });

    document.documentElement.setAttribute(
      "data-theme",
      settings.darkMode ? "dark" : "light"
    );

    document.documentElement.setAttribute(
      "data-cb",
      settings.colorBlindMode ? "more" : "less"
    );

    if (!word) {
      !words.length
        ? setWords(wordsList)
        : setWord(words[Math.floor(Math.random() * words.length)]);
    }

    if (!won) {
      let played = parseInt(localStorage.getItem("played")) || 0;
      let streak = parseInt(localStorage.getItem("streak")) || 0;

      if (prevGuesses[prevGuesses.length - 1] === word) {
        let wins = parseInt(localStorage.getItem("won")) || 0;
        let maxStreak = parseInt(localStorage.getItem("max-streak") || 0);
        let movesDist =
          JSON.parse(localStorage.getItem("moves-distribution")) || [];

        setWon(true);
        animateBlocks(prevGuesses.length - 1, "full", "flip");

        localStorage.setItem("won", ++wins);
        localStorage.setItem("played", ++played);
        localStorage.setItem("streak", ++streak);
        localStorage.setItem(
          "moves-distribution",
          JSON.stringify([...movesDist, prevGuesses.length])
        );

        if (streak > maxStreak) localStorage.setItem("max-streak", ++maxStreak);

        setModalType("stats");
        setShowModal(true);
      } else if (prevGuesses.length === 6) {
        localStorage.setItem("played", ++played);
        localStorage.setItem("streak", 0);

        animateBlocks(5, "full", "shake");

        setModalType("stats");
        setShowModal(true);
      }
    }

    if (prevGuesses.length) {
      let { rightPlace, wrongPlace } = {
        rightPlace: [...correctLetters.rightPlace],
        wrongPlace: [...correctLetters.wrongPlace],
      };
      prevGuesses[prevGuesses.length - 1].split("").forEach((letter, idx) => {
        if (word.includes(letter)) {
          if (word[idx] === letter) {
            if (!correctLetters.rightPlace.includes(letter))
              rightPlace = [...rightPlace, letter];
              wrongPlace = wrongPlace.filter(ltr => ltr !== letter);
          } else {
            if (
              !correctLetters.rightPlace.includes(letter) &&
              !correctLetters.wrongPlace.includes(letter)
            )
              wrongPlace = [...wrongPlace, letter];
          }
        }
      });
      setCorrectLetters({
        ...correctLetters,
        rightPlace: [...rightPlace],
        wrongPlace: [...wrongPlace],
      });
    }
  }, [words, prevGuesses, settings.darkMode, settings.colorBlindMode]);

  const modalContent = () => {
    switch (modalType) {
      case "instructions":
        return <Instructions />;
      case "stats":
        return <Stats reset={reset} />;
      case "settings":
        return <Settings settings={settings} setSettings={setSettings} />;
      default:
        break;
    }
  };

  const reset = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setCurrentGuess("");
    setPrevGuesses([]);
    setWon(false);
    setShowModal(false);
    setCorrectLetters({ rightPlace: [], wrongPlace: [] });
  };

  const animateBlocks = (rowNum, colNum, type = "shake") => {
    setAnimateBlock({
      ...animateBlock,
      animate: true,
      rowNum: rowNum,
      colNum: colNum,
      animationType: type,
    });
    setTimeout(() => {
      setAnimateBlock({
        ...animateBlock,
        animate: false,
        rowNum: -1,
        colNum: -1,
        animationType: "shake",
      });
    }, 500);
  };

  return (
    <div className='app'>
      {word && <Details word={word} />}
      <Header setShowModal={setShowModal} setModalType={setModalType} />
      <main>
        <Gameboard
          word={word}
          currentGuess={currentGuess}
          prevGuesses={prevGuesses}
          animateBlock={animateBlock}
          correctLetters={correctLetters}
          setCorrectLetters={setCorrectLetters}
        />
        <Keyboard
          words={words}
          word={word}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          prevGuesses={prevGuesses}
          setPrevGuesses={setPrevGuesses}
          won={won}
          correctLetters={correctLetters}
          wrongLetters={prevGuesses
            .join("")
            .split("")
            .filter((el) => !word.includes(el))
            .join("")}
          animateBlocks={animateBlocks}
        />
      </main>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
      >
        {modalContent()}
      </Modal>
    </div>
  );
}

export default App;
