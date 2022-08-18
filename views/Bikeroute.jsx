const React = require('react');

function BikeRoute({ title, location, riderLoginBR, length }) {
  return (
        <div className="cardElement">
          <br/>
          <h3>{title}</h3>
          <h4>`Локация: ${location}`</h4>
          <p><img src="/images/test.png" alt="Тест" /></p>
          <p>`Автор: ${riderLoginBR}`</p>
          <p>`Протяженность: ${length}`</p>
          <h6><a href="http://www.yandex.ru">Подробнее</a></h6>
          <br/>
        </div>
  )
};

module.exports = BikeRoute;
