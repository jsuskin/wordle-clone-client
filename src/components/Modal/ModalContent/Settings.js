import "./styles/Settings.css";

const Settings = ({ settings, setSettings }) => {
  return (
    <div className='modal-content settings-container'>
      <h3 className='modal-heading'>SETTINGS</h3>
      <div className='modal-body settings'>
        <div className='hard-mode'>
          <div>
            <h3>Hard Mode</h3>
            <p style={{ fontSize: "0.8em" }}>
              Any revealed hints must be used in subsequent guesses
            </p>
          </div>
          <div
            className={`toggle-container${settings.hardMode ? " on" : ""}`}
            onClick={() =>
              setSettings({ ...settings, hardMode: !settings.hardMode })
            }
          >
            <div className='toggle'></div>
          </div>
        </div>
        <hr />
        <div className='theming'>
          <h3>Dark Theme</h3>
          <div
            className={`toggle-container${settings.darkMode ? " on" : ""}`}
            onClick={() => {
              const setDarkMode = !settings.darkMode;
              setSettings({ ...settings, darkMode: setDarkMode });
              localStorage.setItem(
                "theme",
                setDarkMode ? "dark" : "light"
              );
            }}
          >
            <div className='toggle'></div>
          </div>
        </div>
        <hr />
        <div className='color-blind-mode'>
          <div>
            <h3>Color Blind Mode</h3>
            <p style={{ fontSize: "0.8em" }}>High contrast colors</p>
          </div>
          <div
            className={`toggle-container${
              settings.colorBlindMode ? " on" : ""
            }`}
            onClick={() => {
              const setColorBlindMode = !settings.colorBlindMode;
              setSettings({ ...settings, colorBlindMode: setColorBlindMode });
              localStorage.setItem("cb", setColorBlindMode ? "more" : "less");
            }
            }
          >
            <div className='toggle'></div>
          </div>
        </div>
        <hr />
        <div className='feedback'>
          <h3>Feedback</h3>
          <p>
            <a href='mailto:jsuskin85@gmail.com'>Email</a> |{" "}
            <a
              href='https://github.com/jsuskin'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Settings;
