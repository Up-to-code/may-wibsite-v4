import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-black text-neutral-content">
        <nav>
          <header className="footer-title">Sections</header>
          <Link className="link link-hover" href={"/"}>
            Home
          </Link>
          <Link className="link link-hover" href={"/Skiles"}>
            Skiles
          </Link>

          <Link className="link link-hover" href={"/Projects"}>
            Projects
          </Link>

          <Link className="link link-hover" href={"/About"}>
            About us
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Social media</header>
          <a className="link link-hover" href="https://github.com/Up-to-code">
            github
          </a>
          <a
            className="link link-hover"
            href="https://www.pinterest.com/ahmed_developer/"
          >
            pinterest
          </a>
          <a
            className="link link-hover"
            href="https://www.instagram.com/msteer_code_x/"
          >
            instagram
          </a>
          <a
            className="link link-hover"
            href="https://www.tiktok.com/@ahmed_mansour_dev?lang=en"
          >
            tiktok
          </a>
          <a
            className="link link-hover"
            href="https://www.youtube.com/@Ahmed_Mansour_Al_Rife"
          >
            youtube
          </a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
