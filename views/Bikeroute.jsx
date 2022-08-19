const React = require('react');

function BikeRoute({ id, title, location, riderLoginBR, length, img}) {
  return (
    <div>
    <form id={`formid${id}`} className="cardElement" >
      <br />
      <h3>Маршрут: «{title}»</h3>
      <h4>Локация: {location}</h4>
      <h5>Протяженность: {length} км</h5>
      <p><img src={img} alt="Тест" width={500} /></p>
      <p>Автор: <h4>{riderLoginBR}</h4></p>
      <a href={`/bikeroutes/${id}`}>Подробнее о маршруте</a>
      <br />
    </form>
    </div>
  );
}

module.exports = BikeRoute;
