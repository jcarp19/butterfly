// import { Link } from "react-router-dom";

import PageNav from "./PageNav";

export default function Contact() {
  return (
    <>
      <PageNav />
      <section className='contact col-1-1'>
        <h1>Contact Form</h1>
        <p>
          If you're interested in partnering with us and seeing how we can help
          your business, charity, or any other venture, please fill out this
          form and sumbit it. We'll be in contact withing 24 hours.
        </p>
        <p>
          We can also be reached by phone: 989.390-2245 or email:
          info@butterflymirrors.com
        </p>
      </section>
    </>
  );
}
