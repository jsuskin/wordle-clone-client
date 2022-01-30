import './styles/Header.css';

const Header = ({ setShowModal, setModalType }) => {
  return (
    <header>
      <div className='instructions-icon-container header-element-container'>
        <div
          className='instructions-icon header-element'
          onClick={() => {
            setModalType("instructions");
            setShowModal(true);
          }}
        >
          <img
            src='https://img.icons8.com/material-outlined/23/808080/help.png'
            alt='help'
          />
        </div>
      </div>
      <h2 className='app-title'>
        WOR
        <span style={{ position: "relative" }}>
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            .split("")
            .map((l) => (
              <span key={l} style={{ position: "absolute", left: 0 }}>{l}</span>
            ))}
        </span>
        &nbsp;&nbsp;&nbsp;LE
      </h2>
      <div className='settings-and-stats header-element-container'>
        <div
          className='stats-icon header-element'
          onClick={() => {
            setModalType("stats");
            setShowModal(true);
          }}
        >
          <img src='https://img.icons8.com/external-those-icons-lineal-those-icons/23/808080/external-bar-chart-charts-infographic-those-icons-lineal-those-icons-1.png' />
        </div>
        <div
          className='settings-icon header-element'
          onClick={() => {
            setModalType("settings");
            setShowModal(true);
          }}
        >
          <img src='https://img.icons8.com/material/23/808080/settings--v5.png' />
        </div>
      </div>
    </header>
  );
};

export default Header;
