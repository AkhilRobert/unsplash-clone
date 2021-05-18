import { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import Modal from '../modal';

import './style/header.scss';

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      version="1.1"
      viewBox="0 0 32 32"
      aria-labelledby="unsplash-home"
      aria-hidden="false"
    >
      <title id="unsplash-home">Unsplash Home</title>
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
    </svg>
  );
}

function Nav() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <header className="header">
        <div className="header__left">
          <Logo />
          <div className="header__brand">
            <p className="header__brand-name">Unsplash</p>
            <p className="header__brand-motto">photos for every one</p>
          </div>
          <div className="header__search">
            <input type="text" className="header__search-input" placeholder="search for image" />
            <BiSearch className="header__search-icon" />
          </div>
        </div>
        <div>
          <button className="header__button" onClick={() => setShowModal((modal) => !modal)}>
            Add Image
          </button>
        </div>
      </header>
      {showModal && <Modal onClose={() => setShowModal((modal) => !modal)} />}
    </>
  );
}

export default Nav;
