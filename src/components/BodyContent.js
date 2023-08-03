import ButterflyLogoAlt from "../images/butterfly-logo-alt-wh.svg";

export default function BodyContent() {
  const mainCta = () => {
    window.location("new.html");
  };
  return (
    <>
      <section className='row'>
        <div className='col-1-1 main-content'>
          <img
            className='main-logo'
            aria-label='Butterfly Mirror Logo'
            src={ButterflyLogoAlt}
            alt='Butterfly Mirror Logo'
          />
          <h1 className='headline-primary'>web design & development</h1>
          <button className='btn' onClick={mainCta}>
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
