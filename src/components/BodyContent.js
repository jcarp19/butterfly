import './BodyContent.scss';
// import ButterflyLogo from '../images/butterfly-logo.svg';
import ButterflyLogoAlt from '../images/butterfly-logo-alt.svg';

export default function BodyContent() {
    return (
        <div className="wrapper">
            <div className="main-content">
                <div className="main-branding">
                    <img className='main-logo' aria-label='Butterfly Mirror Logo' src={ButterflyLogoAlt} alt="Butterfly Mirror Logo" />
                    <div className="main-headline"><span className='main-headline__title'>web design & development</span></div>
                </div>
                <div className="main-cta">
                    <button className="btn" aria-label='Learn More' title="Learn More button">Learn More</button>
                </div>
            </div>
        </div>
    )
};