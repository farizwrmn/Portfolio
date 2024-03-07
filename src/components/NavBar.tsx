import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
}
function NavBar({ brandName, imageSrcPath }: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={imageSrcPath}
            width="30"
            height="40"
            className="d-inline-block align-center"
            alt="Home"
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul>
            <li>
              <a href="/about" className="btn">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
