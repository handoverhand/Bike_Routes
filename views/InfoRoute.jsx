const React = require('react');
const Layout = require('./Layout');
const Comment = require('./Comment');

function BikeRoutesList({ id, bikerouteId, allCommentId }) {
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
        <div className = "regDiv shadow-lg p-3 mb-5 bg-body rounded">
        <form>
        <input name="formInput" type="text" className="form-control" placeholder="Введите комментарий" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <br />
        <input name="formInput" type="text" className="form-control" placeholder="Введите оценку маршрута" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <br />
          <button className="btn btn-primary">Добавить комментарий</button>
        </form>
        </div>
        {allCommentId.map((el) => <Comment comment={el.comment} grade={el.grade} riderLoginFB={el.riderLoginFB}/>)}
      </div>
    </Layout>
  );
}

module.exports = BikeRoutesList;
