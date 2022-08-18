const React = require('react');
const Layout = require('./Layout');
const BikeRoute = require('./Bikeroute');

function BikeRoutesList({ allRoutes }) {
  return (
    <Layout>
      <form action="" className="allCards">
        {allRoutes.map((el) => <BikeRoute id={el.id} title={el.title} location={el.location} riderLoginBR={el.riderLoginBR} length={el.length}/>)}
      </form>
    </Layout>
  )
};

module.exports = BikeRoutesList;
