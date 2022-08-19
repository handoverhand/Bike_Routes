const React = require('react');
const Layout = require('./Layout.jsx');

function AuthorizationForm({ message }) {
  return (
    <Layout>
            <div className="whiteDiv" />
            <h2>Для входа в личный кабинет введите Никнейм и пароль</h2>
            <div className="whiteDiv" />
            <form action="/auth/log" method="POST">
              <label htmlFor="loginInput" className="form-label"><h3>Введите Никнейм</h3></label>
              <input name="login" type="text" id="loginInput" className="form-control" />
              <br />
              <label htmlFor="passwordInput" className="form-label"><h3>Введите пароль</h3></label>
              <input name="password" type="password" id="passwordInput" className="form-control" />
              <br />
              <button type="submit" className="btn btn-primary">Вход</button>
              <div>{message}</div>
            </form>
    </Layout>
  );
}

module.exports = AuthorizationForm;
