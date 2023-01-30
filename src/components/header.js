import "../sass/Main.scss";
import ButterflyIcon from '../images/butterfly-icon-purple.svg';

function Header() {
    return (
        <>
        <header className='row'>

            <div className="col-1-1">
                <img className='butterfly-icon' src={ButterflyIcon} alt="Butterfly Mirrors Logo" />
            </div>
            {/* <div className="col-1-2">
                <img className='butterfly-icon' src={ButterflyIcon} alt="Butterfly Mirrors Logo" />
            </div>
            <div className="col-1-2">
                <span className="material-icons header-icon">call</span>
                <span className='phone-number'>248.953.4315</span>
            </div> */}
        </header>
        </>

    )
};

export default Header;
