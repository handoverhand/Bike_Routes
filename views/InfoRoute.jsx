const React = require('react');
const Layout = require('./Layout');

function BikeRoutesList({ id, bikerouteId }) {
  return (
    <Layout>
      <div>
        <div id={id} className="bikerouteId"><h2>Выбранный маршрут:</h2></div>
        <div id="map" style={{ width: `${900}px`, height: `${600}px`, margin: 'auto' }} />
        <form type="submit" method="get" action="/bikeroutes">
          <div>
            <h3>Название маршрута:</h3>
            {' '}
            <h2>{bikerouteId.title}</h2>
          </div>
          <div>
            Локация:
            {' '}
            {bikerouteId.location}
          </div>
          <div>
            Автор маршрута: <h4>{bikerouteId.riderLoginBR}</h4>
          </div>
          <button className="btn btn-primary">Вернуться к списку маршрутов</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = BikeRoutesList;
