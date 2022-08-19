const React = require('react');

function BikeRoute({ id, title, location, riderLoginBR, length, img}) {
  return (
    <div className="cardElement">
      <br />
      <h3>Маршрут: «{title}»</h3>
      <h4>Локация: {location}</h4>
      <h5>Протяженность: {length} км</h5>
      <p><img src={img} alt="Тест" width={500} /></p>
      <p>Автор: {riderLoginBR}</p>
      <button className="btn btn-primary"><a href={`/bikeroutes/${id}`}><p className = "bikeReg">Подробнее</p></a></button>
      <br />
    </div>
  );
}

module.exports = BikeRoute;
