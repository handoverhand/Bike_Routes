const React = require('react');
const Layout = require('./Layout');
const BikeRoute = require('./Bikeroute');

function BikeRoutesList({ allRoutes }) {
  return (
    <Layout>
      <form action="" className="allCards">
        {
          allRoutes.map(
            (route) => (
              <BikeRoute
                id={route.id}
                title={route.title}
                location={route.location}
                riderLoginBR={route.riderLoginBR}
                length={route.length}
              />
            ),
          )
        }
      </form>
    </Layout>
  );
}

module.exports = BikeRoutesList;
