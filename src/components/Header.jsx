import "../sass/Main.scss";
import ButterflyIcon from "../images/butterfly-icon-wh.svg";

function Header() {
  return (
    <>
      <header className='row'>
        <img
          className='butterfly-icon'
          src={ButterflyIcon}
          alt='Butterfly Mirrors Logo'
        />
        <div className='contact'>
          <span className='material-icons header-icon'>call</span>
          <span className='phone-number'>
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
