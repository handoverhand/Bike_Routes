const React = require('react');
const Layout = require('./Layout');
const BikeRoute = require('./Bikeroute');

function BikeRoutesList({ allRoutes, rider }) {
  return (
    <Layout rider={rider}>
      <div
        action=""
        className="allCards"
        style={{
          backgroundColor: 'grey',
        }}
      >
        <form>
          {
          allRoutes.map(
            (route) => (
              <BikeRoute
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
        <form type="submit" action="/">
          <button>На главную</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = BikeRoutesList;
