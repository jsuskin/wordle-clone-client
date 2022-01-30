import './styles/Modal.css';

const Modal = ({showModal, setShowModal, modalType, children}) => {
  return (
    <>
      <div className={`modal-backdrop${showModal && modalType === 'stats' ? '' : ' hide'}`} onClick={() => setShowModal(false)}></div>
      <div
        className={`modal${showModal ? "" : " hide"}${
          modalType === "stats" ? " compact" : ""
        }`}
      >
        <div className='close-modal' onClick={() => setShowModal(false)}>
          &times;
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
