const React = require('react');

function BikeRoute({ id, title, location, riderLoginBR, length, img}) {
  return (
    <form type="submit" className="cardElement" action={`/bikeroutes/${id}`}>
    <br />
    <h3>Маршрут: «{title}»</h3>
    <h4>Локация: {location}</h4>
    <h5>Протяженность: {length} км</h5>
    <p><img src={img} alt="Тест" width={500} /></p>
    <p>Автор: {riderLoginBR}</p>
    <button type="submit" className="btn btn-primary">Подробнее</button>
    <br />
  </form>
  );
}

module.exports = BikeRoute;
