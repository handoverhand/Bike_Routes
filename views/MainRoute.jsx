const React = require('react');
const Layout = require('./Layout');

function BikeRoutesList({ allRoutes, rider }) {
  return (
    <Layout rider={rider}>
      <form className="MainForm" type="submit" action="/bikeroutes" >
      {/* style={{ backgroundImage: '/images/Main.jpeg' }}> */}
      <img src='/images/Main.jpeg' alt="Тест" width="100%" />
      <button className="Mainbtn btn btn-primary">Выберите свой веломаршрут</button>
      </form>
    </Layout>
  );
}

module.exports = BikeRoutesList;
