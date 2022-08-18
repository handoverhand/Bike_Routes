const React = require('react');
const Layout = require('./Layout.jsx');

function AuthorizationForm() {
  return (
    <Layout>
      <h2>Для входа в личный кабинет введите Никнейм и пароль</h2>
      <form action="/auth/log" method="POST">
        <label htmlFor="loginInput">Введите Никнейм</label>
        <input name="login" type="text" id="loginInput" />
        <br />
        <label htmlFor="passwordInput">Введите пароль</label>
        <input name="password" type="password" id="passwordInput" />
        <br />
        <button type="submit">Вход</button>
      </form>
    </Layout>
  );
}

module.exports = AuthorizationForm;
