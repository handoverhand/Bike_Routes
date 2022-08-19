const React = require('react');
const Layout = require('./Layout');

function BikeRoutesList({ id, bikerouteId }) {
  return (
    <Layout>
      <div style={{ backgroundColor: 'grey' }}>
        <div id={id} className="bikerouteId">Выбранный маршрут:</div>
        <div id="map" style={{ width: `${900}px`, height: `${600}px`, margin: 'auto' }} />
        <form type="submit" method="get" action="/bikeroutes">
          <div>
            Название маршрута:
            {' '}
            {bikerouteId.title}
          </div>
          <div>
            Локация:
            {' '}
            {bikerouteId.location}
          </div>
          <div>
            Автор маршрута: {bikerouteId.riderLoginBR}
          </div>
          <button>Вернуться к списку маршрутов</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = BikeRoutesList;
