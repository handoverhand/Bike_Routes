const React = require('react');
const Layout = require('./Layout');

function Lk() {
  return (
    <Layout>
      <form action="">
        <div>Card here</div>
        <br />
        <input type="text" />
        <br />
        <button type="submit" className="btn btn-primary">Добавить маршрут</button>
      </form>

    </Layout>
  );
}
module.exports = Lk;
