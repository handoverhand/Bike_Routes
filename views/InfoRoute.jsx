const React = require('react');
const Layout = require('./Layout');
const Comment = require('./Comment');

function BikeRoutesList({ id, bikerouteId, allCommentId }) {
  return (
    <Layout>
      <div style={{ backgroundColor: 'grey' }}>
        <div id={id} className="bikerouteId">Выбранный маршрут:</div>
        <div id="map" style={{ width: `${900}px`, height: `${600}px`, margin: 'auto' }} />
        <form type="submit" method="get" action="/bikeroutes">
          <div>
            Название маршрута:
            {' '}
            {bikerouteId.title}
          </div>
          <div>
            Локация:
            {' '}
            {bikerouteId.location}
          </div>
          <div>
            Автор маршрута: {bikerouteId.riderLoginBR}
          </div>
          <button>Вернуться к списку маршрутов</button>
        </form>
        <form>
        <input name="formInput" type="text" className="form-control" placeholder="Введите комментарий" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <input name="formInput" type="text" className="form-control" placeholder="Введите оценку маршрута" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button>добавить комментарий</button>
        </form>
        {allCommentId.map((el) => <Comment comment={el.comment} grade={el.grade} riderLoginFB={el.riderLoginFB}/>)}
      </div>
    </Layout>
  );
}

module.exports = BikeRoutesList;
