import { MouseEvent, useState, useContext } from "react";

import "./style/modal.scss";
import { AppContext } from "../../App";

type PropTypes = {
  onClose: () => void;
};

function Modal({ onClose }: PropTypes) {
  const [label, setLabel] = useState<string | undefined>();
  const [URL, setURL] = useState<string | undefined>();

  const [showErrorLabel, setShowErrorLabel] = useState<boolean>(false);
  const [showErrorURL, setShowErrorURL] = useState<boolean>(false);

  const { addImage } = useContext(AppContext);

  function handleSubmit(e: MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!label) setShowErrorLabel(true);
    if (!URL) setShowErrorURL(true);

    if (label && URL) {
      addImage(label, URL);
      onClose();
    }
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal__form">
        <h2 className="modal__heading">Add a new photo</h2>
        <label htmlFor="label" className="modal__field-name">
          Label
        </label>
        <input
          type="text"
          id="label"
          placeholder="Enter a label"
          className="modal__field-input"
          value={label}
          onChange={(e) => setLabel(e.currentTarget.value)}
        />

        {showErrorLabel && (
          <p className={"modal__danger"}>Label cannot be empty</p>
        )}

        <label htmlFor="link" className="modal__field-name">
          Photo URL
        </label>
        <input
          type="text"
          id="link"
          placeholder="https://example.com/1.jpg"
          className="modal__field-input"
          value={URL}
          onChange={(e) => setURL(e.currentTarget.value)}
        />
        {showErrorURL && <p className={"modal__danger"}>URL cannot be empty</p>}

        <div className="form__button-container">
          <button
            onClick={onClose}
            className=" form__button form__button--cancel"
          >
            cancel
          </button>
          <button type="submit" className="form__button form__button--submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
