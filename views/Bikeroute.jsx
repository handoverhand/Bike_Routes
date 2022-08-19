const React = require('react');

function BikeRoute({ id, title, location, riderLoginBR, length, img}) {
  return (
    <div className="cardElement">
      <br />
      <h3>Название маршрута: «{title}»</h3>
      <h4>Локация: {location}</h4>
      <h5>Протяженность: {length} км</h5>
      <p><img src={img} alt="Тест" width={500} /></p>
      <p>Автор: {riderLoginBR}</p>
      <button><a href={`/bikeroutes/${id}`}>Подробнее</a></button>
      <br />
    </div>
  );
}

module.exports = BikeRoute;
