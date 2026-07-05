import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  }

  return (
    <>
      <header className="topbar">
        <div className="container topbar__inner">
          <div className="brand">
            A<span className="brand__accent">B</span>
          </div>

          <nav className="nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav__link"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="menuBtn" onClick={() => setOpenMenu(!openMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {openMenu && (
        <div className="mobileMenu">
          <div className="container mobileMenu__inner">
            <div className="mobileMenu__grid">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobileMenu__link"
                  onClick={(event) => {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mobileMenu__footer">
              © {new Date().getFullYear()} Aditya Bhardwaj
            </div>
          </div>
        </div>
      )}
    </>
  );
}