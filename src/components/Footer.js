import "../sass/Main.scss";

function Footer() {
  const d = new Date();
  let theYear = d.getFullYear();
  return (
    <>
      <footer>
        &copy; {theYear} Butterfly Mirrors, LLC. All Rights Reserved
      </footer>
    </>
  );
}

export default Footer;
