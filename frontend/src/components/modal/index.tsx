import { MouseEvent } from 'react';

import './style/modal.scss';

type PropTypes = {
  onClose: () => void;
};

function Modal({ onClose }: PropTypes) {

  function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
  }

  return (
    <div className="modal">
      <form className="modal__form">
        <h2 className="modal__heading">Add a new photo</h2>
        <label htmlFor="label" className="modal__field-name">
          Label
        </label>
        <input
          type="text"
          id="label"
          placeholder="Enter a label"
          className="modal__field-input"
        />
        <label htmlFor="link" className="modal__field-name">
          Photo URL
        </label>
        <input
          type="text"
          id="link"
          placeholder="https://example.com/1.jpg"
          className="modal__field-input"
        />
        <div className="form__button-container">
          <button onClick={onClose} className=" form__button form__button--cancel">
            cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="form__button form__button--submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
