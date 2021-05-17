import './style/nav.scss';

function unSplashLogo() {
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
  return (
    <div className="nav">
      <div className="nav__left">{unSplashLogo()}</div>
      <div className="nav__right"></div>
    </div>
  );
}

export default Nav;
