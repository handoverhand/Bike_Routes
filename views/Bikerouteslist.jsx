const React = require('react');
const Layout = require('./Layout');
const BikeRoute = require('./Bikeroute');

function BikeRoutesList({ allRoutes, rider }) {
  return (
    <Layout rider={rider}>
      <div
        action=""
        className="allCards"
      >
        <form>
          {
          allRoutes.map(
            (route) => (
              <BikeRoute
                key={route.id}
                id={route.id}
                title={route.title}
                location={route.location}
                riderLoginBR={route.riderLoginBR}
                length={route.length}
                img={route.img}
                />
            ),
          )
        }
        </form>
      </div>
    </Layout>
  );
}

module.exports = BikeRoutesList;
