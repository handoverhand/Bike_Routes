const React = require('react');
const Layout = require('./Layout');

function Navbar({ rider }) {
  return (
    <>
      {!rider ? (
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/bikeroutes"><p className="bikeRout">Bike_Routes</p></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/reg"><p className="bikeReg">Регистрация</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/log"><p className="bikeRout">Вход</p></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        ) : (
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/bikeroutes"><p className="bikeRout">Bike_Routes</p></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link"><p className="bikeReg">Привет, {rider.login}!</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/lk"><p className="bikeReg">Создать маршрут</p></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/logout"><p className="bikeRout">Выйти</p></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

module.exports = Navbar;
