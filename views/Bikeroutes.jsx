const React = require('react');
const Layout = require('./Layout');

function BikeRoutes() {
  return (
    <Layout>
      <form action="">
        <div className="card">
          <h3>Название маршрута:</h3>
          <h4>Локация:</h4>
          <p><img src="images/dzen.png" alt="Тест" /></p>
          <p>Автор:</p>
          <p>Протяженность:</p>
          <h6><a href="http://www.yandex.ru">Подробнее</a></h6>
        </div>
      </form>
    </Layout>
  )
};

module.exports = BikeRoutes;
