import ButterflyLogoAlt from '../images/butterfly-logo-alt-wh.svg';
import ButterflyIcon from '../images/butterfly-icon-wh.svg'
// import background from '../images/butterfly-background-25.jpg';
import About from "./About";

export default function BodyContent() {
    return (
        <>
        
        <section className="row">
            <div className="col-1-1 main-content">
                <div className="row phone">
                    <span className="material-icons phone-icon">call</span>
                    <span className='phone-number'>(248) JIM-4315</span>
                </div>
                <img className='butterfly-icon' src={ButterflyIcon} alt="Butterfly Mirrors Logo" />
                <img className='main-logo' aria-label='Butterfly Mirror Logo' src={ButterflyLogoAlt} alt="Butterfly Mirror Logo" />
                <h1 className='headline-primary'>web design & development</h1>
                <a className="btn" href='https://butterflymirrors.com' aria-label='Learn More' title="Learn More button">Learn More</a>
            </div>
        </section>
    
        <About />
    
    </>    
    )
};