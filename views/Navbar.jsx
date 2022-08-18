const React = require('react');
const Layout = require('./Layout');

function Navbar({rider}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/bikeroutes">Bike_Rootes</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/auth/reg">Registration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/log">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">########</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/logout">Logout</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = Navbar;