const React = require('react');
const Layout = require('./Layout.jsx');

function RegistrationForm() {
  return (
    <Layout>
      <h2>Для регистрации придумайте Никнейм и пароль</h2>
      <form action="/auth/reg" method="POST">
        <label htmlFor="loginInput">Введите Никнейм</label>
        <input name="login" type="text" id="loginInput" />
        <br />
        <label htmlFor="passwordInput">Введите пароль</label>
        <input name="password" type="password" id="passwordInput" />
        <br />
        <button type="submit">Регистрация</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationForm;
