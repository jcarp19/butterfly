import { NavLink } from "react-router-dom";
function PageNav() {
  // const navLinks = document.querySelectorAll(".nav__item");

  // navLinks.forEach((link) => {
  //   link.addEventListener("click", () => {
  //   });
  // });
  const hideNav = () => {
    document.getElementById("nav-toggle").click();
    console.log(`This was clicked`);
  };
  return (
    <>
      <nav className='nav'>
        <input type='checkbox' id='nav-toggle' className='nav__checkbox' />
        <label htmlFor='nav-toggle' className='nav__button'>
          <span className='nav__icon'>&nbsp;</span>
        </label>
        <div className='nav__background'>&nbsp;</div>
        <div className='nav__nav'>
          <ul className='nav__list'>
            <li className='nav__item' onClick={hideNav}>
              <NavLink className={"nav__link"} to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav__item' onClick={hideNav}>
              <NavLink className={"nav__link"} to='/about'>
                About
              </NavLink>
            </li>
            <li className='nav__item' onClick={hideNav}>
              <NavLink className={"nav__link"} to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default PageNav;
