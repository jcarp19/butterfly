import './Header.scss';
import ButterflyIcon from '../images/butterfly-icon.svg';
function Header() {
    return (
        <header>
            <div className="brand">
                <img className='butterfly-icon' src={ButterflyIcon} alt="Butterfly Mirrors Logo" />
            </div>
            <div className="contact">
                <span className="material-icons header-icon">call</span>
                <span className='phone-number'>248.953.4315</span>
            </div>
        </header>
    )
};

export default Header;
