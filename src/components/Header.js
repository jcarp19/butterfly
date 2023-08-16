import "../sass/Main.scss";
import ButterflyIcon from "../images/icon-v6.svg";
import PageNav from "./PageNav";

function Header() {
  return (
    <>
      <PageNav />
      <header className='header'>
        <img
          className='header__logo'
          src={ButterflyIcon}
          alt='Butterfly Mirrors Logo'
        />
        <div className='header__contact'>
          <span className='material-icons header__phone-icon'>call</span>
          <span className='header__phone-number'>
            <a href='tel:9893902245' alt='call 989-390-2245'>
              989.390.2455
            </a>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
