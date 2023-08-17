import { Link } from "react-router-dom";
import ButterflyLogoAlt from "../images/butterfly-logo-alt-wh.svg";

export default function BodyContent() {
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
          <Link className='main-cta' to='/contact'>
            <button className='btn'>Learn More</button>
          </Link>
        </div>
      </section>
      <section className='services col-1-1'>
        <h2 className='headline__secondary'>What We Do</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sint
          soluta modi aliquid qui suscipit et delectus itaque accusamus, quas,
          repellendus voluptas nihil dignissimos assumenda quibusdam labore!
          Autem, id assumenda!
        </p>
      </section>
    </>
  );
}
