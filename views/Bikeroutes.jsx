const React = require('react');
const Layout = require('./Layout');

function BikeRoutes() {
  return (
    <Layout>
      <div>
        <h3>Название маршрута:</h3>
        <h4>Локация:</h4>
        <p><img src="images/dzen.png" alt="Тест" /></p>
        <p>Автор:</p>
        <p>Протяженность:</p>
        <h6><a href="http://www.yandex.ru">Подробнее</a></h6>
      </div>
    </Layout>
  )
};

module.exports = BikeRoutes;
