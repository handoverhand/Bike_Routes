const React = require('react');
const Layout = require('./Layout');

function BikeRoutesList({ id, bikerouteId}) {
  return (
    <Layout>
      <div id={id} className="bikerouteId">Выбранный маршрут:</div>
      <div id="map" style={{ width: `${600}px`, height: `${400}px` }}></div>
      <form type="submit" method="get" action="/bikeroutes">
      <div>Название маршрута: {bikerouteId.title}</div>
      <div>Локация: {bikerouteId.location}</div>
      <div>Автор маршрута:{bikerouteId.riderLoginBR}</div>
      <button>Вернуться к списку маршрутов</button>
      </form>
    </Layout>
  );
}

module.exports = BikeRoutesList;