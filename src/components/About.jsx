// import { Link } from "react-router-dom";

import PageNav from "./PageNav";

const About = () => {
  return (
    <>
      <PageNav />
      <section className='section-about col-1-1'>
        <h2 className='headline-secondary'>
          This is my story and I'm sticking to it!
        </h2>
        <p>
          Have you ever sat in a bar with a friend or loved one discussing
          business posibilities and what you'd name this said business? I have,
          and, well, that's exactly what happed here. You see, I've been
          developing web sites for years. Not just for my livelyhood, but also
          for freind's businesses and as my hobby. So, sitting in the bar one
          night with my significant other, we got to talking... what if. In the
          end, here I am with the result of that festive and whacky
          conversation.
        </p>
        <p>
          What's it all mean, well, it's deep... as deep as a few adult
          beverages will help you go.
        </p>
        <p>What do we do and how will it work?</p>
      </section>
    </>
  );
};

export default About;
