import Lisa from "../images/lisa.jpg";
import Homes from "../images/homes.jpg";
import Salon from "../images/salon.jpg";


const About = () => {
    return (
    <section className="section-about">
        <>
        <div className="col-1-1 u-center-text u-padding-bottom-nil u-margin-bottom-nil">
            <h2 className="headline-secondary">a little about who we are</h2>
        </div>
        <div className="row mobile-col">
            <div className="col-1-2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam, ab officiis incidunt, sequi nulla consectetur perferendis ut mollitia ratione distinctio. Autem eaque quia magnam ad, voluptatum pariatur inventore corporis.</p>
                <p>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div className="col-1-2">
                <div className="composition">
                    <img src={Lisa} alt="Web design sample" />
                    <img src={Homes} alt="Web design sample" />
                    <img src={Salon} alt="Web design sample" />
                </div>
            </div>
        </div>
        </>
        
    </section>
    )
}

export default About;