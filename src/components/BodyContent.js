import ButterflyLogoAlt from '../images/butterfly-logo-alt-wh.svg';
import ButterflyIcon from '../images/butterfly-icon-wh.svg'
// import background from '../images/butterfly-background-25.jpg';
import About from "./About";

export default function BodyContent() {
    return (
        <>
        
        <section className="row">
            {/* <div className="bg-image" style={{ backgroundImage: `url(${background})` }}>
            </div> */}
            <div className="col-1-1 main-content">
                <div className="main-branding">
                    <img className='butterfly-icon' src={ButterflyIcon} alt="Butterfly Mirrors Logo" />
                    <img className='main-logo' aria-label='Butterfly Mirror Logo' src={ButterflyLogoAlt} alt="Butterfly Mirror Logo" />
                    <div className="main-headline"><span className='main-headline__title'>web design & development</span></div>
                </div>
                <div className="main-cta">
                    <a className="btn" href='https://butterflymirrors.com' aria-label='Learn More' title="Learn More button">Learn More</a>
                </div>
            </div>
        </section>
    
        <About />
    
    </>    
    )
};